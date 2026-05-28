import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

type AnalyticsPayload = {
  session_id?: unknown;
  event_type?: unknown;
  path?: unknown;
  resource_unit?: unknown;
  seconds_since_start?: unknown;
  referrer?: unknown;
  metadata?: unknown;
};

const validEventTypes = new Set([
  'start',
  'heartbeat',
  'end',
  'unit_select',
  'unit_opened',
  'resource_opened',
  'flashcard_revealed',
  'flashcard_navigated',
  'quiz_question_answered',
]);

const jsonResponse = (statusCode: number, body: Record<string, string | boolean>) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const decodeJwtPayload = (token: string) => {
  const [, payload] = token.split('.');

  if (!payload) {
    return null;
  }

  try {
    const normalizedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = Buffer
      .from(normalizedPayload, 'base64')
      .toString('utf8');

    return JSON.parse(decodedPayload) as Record<string, unknown>;
  } catch {
    return null;
  }
};

const getRequiredEnv = () => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return null;
  }

  return { supabaseUrl, supabaseServiceKey };
};

const isSupabaseAdminKey = (key: string) => {
  if (key.startsWith('sb_secret_')) {
    return true;
  }

  return decodeJwtPayload(key)?.role === 'service_role';
};

const getSupabaseKeyType = (key: string) => {
  if (key.startsWith('sb_secret_')) return 'sb_secret';
  if (key.startsWith('sb_publishable_')) return 'sb_publishable';

  const role = decodeJwtPayload(key)?.role;
  if (role === 'service_role') return 'legacy_service_role_jwt';
  if (role === 'anon') return 'legacy_anon_jwt';

  return 'invalid_or_unknown';
};

const parsePayload = (body: string | null): AnalyticsPayload => {
  if (!body) {
    throw new Error('Missing request body.');
  }

  try {
    return JSON.parse(body) as AnalyticsPayload;
  } catch {
    throw new Error('Invalid JSON body.');
  }
};

const asString = (value: unknown) => (typeof value === 'string' ? value : null);
const asNullableString = (value: unknown) => (
  value === null || value === undefined ? null : asString(value)
);
const asNullableNumber = (value: unknown) => (
  typeof value === 'number' && Number.isFinite(value) ? value : null
);
const asMetadata = (value: unknown) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  try {
    return JSON.parse(JSON.stringify(value)) as Record<string, unknown>;
  } catch {
    return {};
  }
};

const isMissingMetadataColumn = (error: { code?: string; message?: string }) => {
  const message = (error.message ?? '').toLowerCase();

  return error.code === 'PGRST204' || error.code === '42703' || message.includes('metadata');
};

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'GET') {
    const supabaseConfig = getRequiredEnv();

    if (!supabaseConfig) {
      return jsonResponse(200, {
        ready: false,
        supabase_url_configured: false,
        supabase_key_configured: false,
        supabase_key_type: 'missing',
      });
    }

    return jsonResponse(200, {
      ready: isSupabaseAdminKey(supabaseConfig.supabaseServiceKey),
      supabase_url_configured: true,
      supabase_key_configured: true,
      supabase_key_type: getSupabaseKeyType(supabaseConfig.supabaseServiceKey),
    });
  }

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method Not Allowed' });
  }

  let data: AnalyticsPayload;

  try {
    data = parsePayload(event.body);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request body.';

    return jsonResponse(400, { error: message });
  }

  const sessionId = asString(data.session_id);
  const eventType = asString(data.event_type);
  const path = asString(data.path);
  const secondsSinceStart = asNullableNumber(data.seconds_since_start);

  if (!sessionId || !eventType || !validEventTypes.has(eventType) || !path) {
    return jsonResponse(400, { error: 'Invalid analytics payload.' });
  }

  try {
    const supabaseConfig = getRequiredEnv();

    if (!supabaseConfig) {
      return jsonResponse(202, { message: 'Analytics skipped: Supabase is not configured.' });
    }

    const { supabaseUrl, supabaseServiceKey } = supabaseConfig;

    if (!isSupabaseAdminKey(supabaseServiceKey)) {
      return jsonResponse(500, {
        error: 'SUPABASE_SERVICE_ROLE_KEY must be a Supabase secret key beginning with sb_secret_ or the legacy service_role JWT.',
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });
    const userAgent = event.headers['user-agent'] || 'unknown';
    const metadata = {
      ...asMetadata(data.metadata),
      server_received_at: new Date().toISOString(),
    };
    const row = {
      session_id: sessionId,
      event_type: eventType,
      path,
      resource_unit: asNullableNumber(data.resource_unit),
      seconds_since_start: secondsSinceStart,
      referrer: asNullableString(data.referrer),
      user_agent: userAgent,
    };

    const { error } = await supabase
      .from('analytics_events')
      .insert([{ ...row, metadata }]);

    if (error) {
      if (isMissingMetadataColumn(error)) {
        const { error: fallbackError } = await supabase
          .from('analytics_events')
          .insert([row]);

        if (fallbackError) throw fallbackError;
      } else if (error.code === '42501') {
        throw new Error('Supabase RLS rejected analytics insert. Check that SUPABASE_SERVICE_ROLE_KEY is a Supabase secret key beginning with sb_secret_ or the legacy service_role JWT.');
      } else {
        throw error;
      }
    }

    return jsonResponse(200, { message: 'Event logged' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unexpected analytics error.';

    console.error('Analytics Error:', err);
    return jsonResponse(500, { error: message });
  }
};
