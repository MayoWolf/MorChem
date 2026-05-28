import React, { useMemo, useState } from 'react';
import { Unit } from '../App';
import { pdfTextByPath } from '../data/pdfTextIndex';
import './ResourcePanel.css';
import { trackResourceOpened } from '../lib/analytics';

interface ResourcePanelProps {
  unit: Unit;
}

const getUnitDisplayTitle = (title: string) => title.split(': ').slice(1).join(': ') || title;

type Flashcard = {
  front: string;
  back: string;
};

const cleanPdfChunk = (chunk: string) => (
  chunk
    .replace(/\s+/g, ' ')
    .replace(/^Key Concepts:?/i, '')
    .replace(/^Vocabulary Definitions?/i, 'Vocabulary')
    .trim()
);

const getCardTopic = (text: string) => {
  const beforeColon = text.split(':')[0]?.trim();
  const firstWords = text.split(' ').slice(0, 5).join(' ').trim();
  const topic = beforeColon && beforeColon.length <= 54 ? beforeColon : firstWords;
  return topic.replace(/[.;,]$/, '');
};

const makeFlashcards = (unit: Unit): Flashcard[] => {
  const pdfText = pdfTextByPath[unit.pdfPath] || '';
  const pdfCards = pdfText
    .split(/[●○]/)
    .map(cleanPdfChunk)
    .filter((chunk) => (
      chunk.length >= 42
      && /[.!?]/.test(chunk)
      && !/^vocabulary\b/i.test(chunk)
      && !/^key equations?\b/i.test(chunk)
      && !/^practice problems?\b/i.test(chunk)
      && !/study\s*guide key concepts/i.test(chunk)
      && !/studyguide key concepts/i.test(chunk)
    ))
    .slice(0, 10)
    .map((chunk) => ({
      front: `What should you know about ${getCardTopic(chunk)}?`,
      back: chunk,
    }));

  const topicCards = unit.topics.map((topic) => ({
    front: `What are the main ideas in ${topic.name}?`,
    back: topic.concepts.join('; '),
  }));

  return [...pdfCards, ...topicCards];
};

const ResourcePanel: React.FC<ResourcePanelProps> = ({ unit }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const displayTitle = getUnitDisplayTitle(unit.title);
  const flashcards = useMemo(() => makeFlashcards(unit), [unit]);
  const currentCard = flashcards[currentCardIndex] || flashcards[0];

  React.useEffect(() => {
    setCurrentCardIndex(0);
    setIsAnswerVisible(false);
  }, [unit.id]);

  const showPreviousCard = () => {
    setCurrentCardIndex((current) => Math.max(0, current - 1));
    setIsAnswerVisible(false);
  };

  const showNextCard = () => {
    setCurrentCardIndex((current) => Math.min(flashcards.length - 1, current + 1));
    setIsAnswerVisible(false);
  };

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
      </section>

      <section className="flashcard-panel" aria-labelledby="flashcards-title">
        <div className="section-heading">
          <div>
            <span className="resource-kicker">Flashcards</span>
            <h3 id="flashcards-title">PDF Review</h3>
          </div>
        </div>

        <div className="flashcard-body">
          {currentCard && (
            <button
              type="button"
              className={`flashcard ${isAnswerVisible ? 'revealed' : ''}`}
              onClick={() => setIsAnswerVisible((current) => !current)}
              aria-live="polite"
            >
              <span className="flashcard-count">
                {currentCardIndex + 1} / {flashcards.length}
              </span>
              <strong>{isAnswerVisible ? currentCard.back : currentCard.front}</strong>
              <span className="flashcard-hint">
                {isAnswerVisible ? 'Click to hide answer' : 'Click to reveal answer'}
              </span>
            </button>
          )}

          <div className="flashcard-actions">
            <button type="button" onClick={showPreviousCard} disabled={currentCardIndex === 0}>
              Previous
            </button>
            <button type="button" onClick={showNextCard} disabled={currentCardIndex === flashcards.length - 1}>
              Next
            </button>
          </div>
        </div>

        <div className="study-meta">
          <div>
            <span>Cards</span>
            <strong>{flashcards.length}</strong>
          </div>
          <div>
            <span>Skills</span>
            <strong>{unit.skills.length}</strong>
          </div>
        </div>
      </section>

      <section className="review-topics" aria-labelledby="review-targets-title">
        <div className="section-heading">
          <div>
            <span className="resource-kicker">Focus</span>
            <h3 id="review-targets-title">Review Targets</h3>
          </div>
        </div>
        <div className="topics-grid">
          {unit.topics.map((topic, index) => (
            <article key={topic.id} className="topic-card">
              <div className="topic-card-header">
                <h4 className="topic-name">Target {index + 1}: {topic.name}</h4>
              </div>
              <ul className="concepts-list">
                {topic.concepts.map((concept) => (
                  <li key={concept} className="concept-item">{concept}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcePanel;
