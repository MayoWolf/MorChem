import React, { useRef } from 'react';
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

interface ResourcePanelProps {
  unit: Unit;
}

const getUnitDisplayTitle = (title: string) => title.split(': ').slice(1).join(': ') || title;

const targetStatuses = [
  { label: 'In Progress', tone: 'active' },
  { label: 'Practice Next', tone: 'attention' },
  { label: 'Review Later', tone: 'quiet' },
];

const ResourcePanel: React.FC<ResourcePanelProps> = ({ unit }) => {
  const progressMilestones = useRef(new Set<number>());
  const displayTitle = getUnitDisplayTitle(unit.title);

  return (
    <div className="resource-panel-container">
      <section className="unit-hero" aria-labelledby="unit-title">
        <span className="unit-badge">Unit {unit.id}</span>
        <h2 id="unit-title">{displayTitle}</h2>
        <p>{unit.description}</p>

        <div className="skill-list" aria-label="Unit skills">
          {unit.skills.map((skill) => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </section>

      <section className="resource-grid" aria-label={`${unit.title} review resources`}>
        <div className="pdf-panel" aria-label="Primary resource">
          <div className="section-heading">
            <div>
              <span className="resource-kicker">Primary Resource</span>
              <h3>Study Guide PDF</h3>
            </div>
            <a
              className="resource-link"
              href={unit.pdfPath}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackResourceOpened(unit.id, unit.title, 'pdf')}
            >
              Open PDF
            </a>
          </div>
          <div className="pdf-frame-shell">
            <div className="pdf-toolbar" aria-hidden="true">
              <span>{`Unit${unit.id}_StudyGuide.pdf`}</span>
              <span>Embedded preview</span>
            </div>
            <iframe
              key={unit.pdfPath}
              className="pdf-frame"
              src={`${unit.pdfPath}#toolbar=1&navpanes=0`}
              title={`${unit.title} PDF review`}
              onLoad={() => trackResourceOpened(unit.id, unit.title, 'pdf')}
            />
          </div>
        </div>

        <aside className="audio-panel">
          <div className="section-heading compact">
            <div>
              <span className="resource-kicker">Audio</span>
              <h3>Lecture Review</h3>
            </div>
          </div>
          {unit.audioPath ? (
            <audio
              key={unit.audioPath}
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
              <source src={unit.audioPath} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          ) : (
            <div className="audio-state" role="status">
              Audio can live at public/resources/Unit{unit.id}.mp3 when it is ready.
            </div>
          )}

          <div className="study-meta">
            <div>
              <span>Targets</span>
              <strong>{unit.topics.length}</strong>
            </div>
            <div>
              <span>Skills</span>
              <strong>{unit.skills.length}</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="review-topics" aria-labelledby="review-targets-title">
        <div className="section-heading">
          <div>
            <span className="resource-kicker">Focus</span>
            <h3 id="review-targets-title">Review Targets</h3>
          </div>
        </div>
        <div className="topics-grid">
          {unit.topics.map((topic, index) => {
            const status = targetStatuses[index % targetStatuses.length];

            return (
              <article key={topic.id} className={`topic-card ${status.tone}`}>
                <div className="topic-card-header">
                  <h4 className="topic-name">Target {index + 1}: {topic.name}</h4>
                  <span className="topic-status">{status.label}</span>
                </div>
                <ul className="concepts-list">
                  {topic.concepts.map((concept) => (
                    <li key={concept} className="concept-item">{concept}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ResourcePanel;
