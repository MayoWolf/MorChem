import React, { useEffect, useRef } from 'react';
import { Unit } from '../App';
import './ResourcePanel.css';
import {
  trackAudioEnded,
  trackAudioLoaded,
  trackAudioPause,
  trackAudioPlay,
  trackAudioProgress,
  trackResourceOpened,
} from '../lib/analytics';

type ResourceKind = 'pdf' | 'audio';

interface ResourcePanelProps {
  unit: Unit;
}

const getResourceUrl = async (unitId: number, type: ResourceKind) => {
  const response = await fetch(`/.netlify/functions/resource-url?unit=${unitId}&type=${type}`);
  const responseText = await response.text();
  let data: { error?: string; url?: string } = {};

  try {
    data = JSON.parse(responseText) as { error?: string; url?: string };
  } catch {
    throw new Error('Resource signing endpoint is unavailable. Use Netlify Dev or deploy with R2 resource variables configured.');
  }

  if (!response.ok) {
    throw new Error(data.error || `Unable to load this ${type} review.`);
  }

  if (!data.url) {
    throw new Error(`No ${type} review URL was returned for this unit.`);
  }

  return data.url;
};

const ResourcePanel: React.FC<ResourcePanelProps> = ({ unit }) => {
  const progressMilestones = useRef(new Set<number>());
  const [pdfUrl, setPdfUrl] = React.useState<string | null>(null);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [pdfError, setPdfError] = React.useState<string | null>(null);
  const [audioError, setAudioError] = React.useState<string | null>(null);

  useEffect(() => {
    progressMilestones.current.clear();
    setPdfUrl(null);
    setAudioUrl(null);
    setPdfError(null);
    setAudioError(null);

    let isMounted = true;

    getResourceUrl(unit.id, 'pdf')
      .then((url) => {
        if (isMounted) setPdfUrl(url);
      })
      .catch((err) => {
        if (isMounted) {
          setPdfError(err instanceof Error ? err.message : 'Unable to load this PDF review.');
        }
      });

    getResourceUrl(unit.id, 'audio')
      .then((url) => {
        if (isMounted) setAudioUrl(url);
      })
      .catch((err) => {
        if (isMounted) {
          setAudioError(err instanceof Error ? err.message : 'Unable to load this MP3 review.');
        }
      });

    return () => {
      isMounted = false;
    };
  }, [unit.id]);

  return (
    <div className="resource-panel-container">
      <section className="resource-grid" aria-label={`${unit.title} review resources`}>
        <div className="pdf-panel">
          <div className="panel-heading">
            <span className="resource-kicker">PDF</span>
            <h2>Study Guide</h2>
            {pdfUrl && (
              <a
                className="resource-link"
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackResourceOpened(unit.id, unit.title, 'pdf')}
              >
                Open PDF
              </a>
            )}
          </div>
          <div className="pdf-frame-shell">
            {pdfUrl ? (
              <iframe
                key={pdfUrl}
                className="pdf-frame"
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                title={`${unit.title} PDF review`}
              />
            ) : (
              <div className="resource-state" role="status">
                {pdfError || 'Loading PDF review...'}
              </div>
            )}
          </div>
        </div>

        <aside className="audio-panel">
          <div className="panel-heading compact">
            <span className="resource-kicker">MP3</span>
            <h2>Audio Review</h2>
          </div>
          {audioUrl ? (
            <audio
              key={audioUrl}
              controls
              preload="metadata"
              className="audio-player"
              onLoadedMetadata={(event) => (
                trackAudioLoaded(unit.id, unit.title, event.currentTarget)
              )}
              onPlay={(event) => (
                trackAudioPlay(unit.id, unit.title, event.currentTarget)
              )}
              onPause={(event) => (
                trackAudioPause(unit.id, unit.title, event.currentTarget)
              )}
              onTimeUpdate={(event) => (
                trackAudioProgress(
                  unit.id,
                  unit.title,
                  event.currentTarget,
                  progressMilestones.current,
                )
              )}
              onEnded={(event) => (
                trackAudioEnded(unit.id, unit.title, event.currentTarget)
              )}
            >
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          ) : (
            <div className="audio-state" role="status">
              {audioError || 'Loading MP3 review...'}
            </div>
          )}

          <div className="skill-list" aria-label="Unit skills">
            {unit.skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </aside>
      </section>

      <div className="unit-info">
        <h2 className="unit-title">{unit.title}</h2>
        <p className="unit-description">{unit.description}</p>
        
        <div className="review-topics">
          <h3 className="topics-title">Review Targets</h3>
          <div className="topics-grid">
            {unit.topics.map((topic) => (
              <div key={topic.id} className="topic-card">
                <h4 className="topic-name">{topic.id} {topic.name}</h4>
                <ul className="concepts-list">
                  {topic.concepts.map((concept, idx) => (
                    <li key={idx} className="concept-item">{concept}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePanel;
