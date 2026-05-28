const SESSION_KEY = 'mor_session_id';
const START_TIME = Date.now();
const PAGE_ID = crypto.randomUUID();

type AnalyticsEventType =
  | 'start'
  | 'heartbeat'
  | 'end'
  | 'unit_select'
  | 'resource_opened';

type AnalyticsMetadata = Record<string, unknown>;

type AnalyticsOptions = {
  resourceUnit?: number;
  useBeacon?: boolean;
  metadata?: AnalyticsMetadata;
};

type NetworkInformation = {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
};

const navigatorWithConnection = navigator as Navigator & {
  connection?: NetworkInformation;
};

let visibleStartedAt = document.visibilityState === 'visible' ? Date.now() : null;
let visibleMilliseconds = 0;
let maxScrollDepth = 0;

const clampPercent = (value: number) => Math.max(0, Math.min(100, Math.round(value)));

const getSessionId = () => {
  let sessionId = null;

  try {
    sessionId = sessionStorage.getItem(SESSION_KEY);
  } catch {
    return crypto.randomUUID();
  }

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    try {
      sessionStorage.setItem(SESSION_KEY, sessionId);
    } catch {
      // Keep analytics non-blocking if storage is unavailable.
    }
  }

  return sessionId;
};

const getSecondsSinceStart = () => Math.floor((Date.now() - START_TIME) / 1000);

const getVisibleSeconds = () => {
  const currentVisibleMilliseconds = visibleStartedAt
    ? Date.now() - visibleStartedAt
    : 0;

  return Math.floor((visibleMilliseconds + currentVisibleMilliseconds) / 1000);
};

const updateVisibilityTime = () => {
  if (document.visibilityState === 'visible' && visibleStartedAt === null) {
    visibleStartedAt = Date.now();
    return;
  }

  if (document.visibilityState !== 'visible' && visibleStartedAt !== null) {
    visibleMilliseconds += Date.now() - visibleStartedAt;
    visibleStartedAt = null;
  }
};

const getScrollDepth = () => {
  const root = document.documentElement;
  const scrollableHeight = root.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    return 100;
  }

  return clampPercent((window.scrollY / scrollableHeight) * 100);
};

const updateMaxScrollDepth = () => {
  maxScrollDepth = Math.max(maxScrollDepth, getScrollDepth());
};

const getTimezone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return null;
  }
};

const getConnectionMetadata = () => {
  const connection = navigatorWithConnection.connection;

  if (!connection) {
    return {};
  }

  return {
    connection_effective_type: connection.effectiveType ?? null,
    connection_downlink: connection.downlink ?? null,
    connection_rtt: connection.rtt ?? null,
    connection_save_data: connection.saveData ?? null,
  };
};

const getPageMetadata = (): AnalyticsMetadata => {
  updateMaxScrollDepth();

  return {
    page_id: PAGE_ID,
    page_title: document.title,
    page_url: window.location.href,
    search: window.location.search || null,
    hash: window.location.hash || null,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    pixel_ratio: window.devicePixelRatio,
    language: navigator.language,
    languages: navigator.languages,
    timezone: getTimezone(),
    timezone_offset_minutes: new Date().getTimezoneOffset(),
    online: navigator.onLine,
    visibility_state: document.visibilityState,
    visible_seconds: getVisibleSeconds(),
    max_scroll_depth_percent: maxScrollDepth,
    color_scheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    reduced_motion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    ...getConnectionMetadata(),
  };
};

const getUnitMetadata = (unitTitle: string) => ({
  unit_title: unitTitle,
});

const sendEvent = (
  eventType: AnalyticsEventType,
  { resourceUnit, useBeacon = false, metadata = {} }: AnalyticsOptions = {},
) => {
  const payload = {
    session_id: getSessionId(),
    event_type: eventType,
    path: `${window.location.pathname}${window.location.search}`,
    resource_unit: resourceUnit ?? null,
    seconds_since_start: getSecondsSinceStart(),
    referrer: document.referrer || null,
    metadata: {
      ...getPageMetadata(),
      ...metadata,
    },
  };

  const url = '/.netlify/functions/analytics';
  const body = JSON.stringify(payload);

  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((err) => console.error('Failed to send analytics', err));
  }
};

export const startAnalytics = () => {
  sendEvent('start');

  const heartbeatInterval = setInterval(() => {
    if (document.visibilityState === 'visible') {
      sendEvent('heartbeat');
    }
  }, 15000);

  const handlePageHide = () => {
    updateVisibilityTime();
    sendEvent('end', { useBeacon: true });
    clearInterval(heartbeatInterval);
  };

  window.addEventListener('scroll', updateMaxScrollDepth, { passive: true });
  document.addEventListener('visibilitychange', updateVisibilityTime);
  window.addEventListener('pagehide', handlePageHide);

  return () => {
    clearInterval(heartbeatInterval);
    window.removeEventListener('scroll', updateMaxScrollDepth);
    document.removeEventListener('visibilitychange', updateVisibilityTime);
    window.removeEventListener('pagehide', handlePageHide);
  };
};

export const trackUnitSelect = (unit: number, title: string) => {
  sendEvent('unit_select', {
    resourceUnit: unit,
    metadata: { unit_title: title },
  });
};

export const trackResourceOpened = (
  unit: number,
  unitTitle: string,
  resourceType: 'pdf',
) => {
  sendEvent('resource_opened', {
    resourceUnit: unit,
    metadata: {
      ...getUnitMetadata(unitTitle),
      resource_type: resourceType,
    },
  });
};
