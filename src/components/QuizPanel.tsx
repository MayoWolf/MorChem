import React from 'react';
import { finalPracticeQuiz } from '../data/finalPracticeQuiz';
import './QuizPanel.css';

type Answers = Record<string, string | undefined>;

const unitLabelsByChapter: Record<string, string> = {
  'Chapter 12': 'Unit 8',
  'Chapter 14': 'Unit 10',
  'Chapter 15': 'Unit 11',
  'Chapter 16': 'Unit 12',
  'Chapter 17': 'Unit 13',
  'Chapter 18': 'Unit 14',
  'Chapter 19': 'Unit 15',
  'Chapter 20': 'Unit 16',
  'Chapter 21': 'Unit 16',
  'Chapter 25': 'Unit 17',
};

const getUnitLabel = (chapter: string) => unitLabelsByChapter[chapter] || chapter;

const QuizPanel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Answers>({});
  const [revealed, setRevealed] = React.useState<Set<string>>(() => new Set());
  const [flagged, setFlagged] = React.useState<Set<string>>(() => new Set());
  const [isFinished, setIsFinished] = React.useState(false);

  const currentQuestion = finalPracticeQuiz[currentIndex];
  const currentUnitLabel = getUnitLabel(currentQuestion.chapter);
  const selectedAnswer = answers[currentQuestion.id];
  const isCurrentRevealed = revealed.has(currentQuestion.id) || isFinished;
  const showFeedback = Boolean(selectedAnswer && isCurrentRevealed);
  const currentIsCorrect = Boolean(selectedAnswer && selectedAnswer === currentQuestion.answer);
  const answeredCount = finalPracticeQuiz.filter((question) => answers[question.id]).length;
  const checkedCount = isFinished
    ? answeredCount
    : finalPracticeQuiz.filter((question) => revealed.has(question.id)).length;
  const flaggedCount = flagged.size;
  const progressPercent = Math.round((answeredCount / finalPracticeQuiz.length) * 100);
  const correctCount = finalPracticeQuiz.filter((question) => answers[question.id] === question.answer).length;
  const scorePercent = Math.round((correctCount / finalPracticeQuiz.length) * 100);

  const goToQuestion = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(finalPracticeQuiz.length - 1, index)));
  };

  const setAnswer = (answerId: string) => {
    if (isFinished || revealed.has(currentQuestion.id)) {
      return;
    }

    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: answerId,
    }));
  };

  const clearAnswer = () => {
    if (isFinished || revealed.has(currentQuestion.id)) {
      return;
    }

    setAnswers((current) => {
      const next = { ...current };
      delete next[currentQuestion.id];
      return next;
    });
  };

  const revealCurrentAnswer = () => {
    if (!selectedAnswer) {
      return false;
    }

    setRevealed((current) => {
      const next = new Set(current);
      next.add(currentQuestion.id);
      return next;
    });

    return true;
  };

  const handlePrimaryAction = () => {
    if (selectedAnswer && !revealed.has(currentQuestion.id) && !isFinished) {
      revealCurrentAnswer();
      return;
    }

    goToQuestion(currentIndex + 1);
  };

  const toggleFlag = () => {
    setFlagged((current) => {
      const next = new Set(current);

      if (next.has(currentQuestion.id)) {
        next.delete(currentQuestion.id);
      } else {
        next.add(currentQuestion.id);
      }

      return next;
    });
  };

  const resetQuiz = () => {
    setAnswers({});
    setRevealed(new Set());
    setFlagged(new Set());
    setIsFinished(false);
    setCurrentIndex(0);
  };

  return (
    <section className="quiz-panel" aria-label="Final practice quiz">
      <div className="quiz-hero">
        <div>
          <span className="quiz-kicker">Final Practice</span>
          <h2>Honors Chemistry Final Practice</h2>
          <p>
            {finalPracticeQuiz.length} questions pulled from the final practice PDF.
          </p>
        </div>
        <div className="source-link-row">
          <a
            className="source-pdf-link"
            href="/resources/Final-Practice-Questions.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open Questions
          </a>
          <a
            className="source-pdf-link secondary"
            href="/resources/Final-Practice-Answer-Key.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open Key
          </a>
        </div>
      </div>

      <div className="quiz-progress-strip">
        <div className="progress-track" aria-label={`${progressPercent}% answered`}>
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <span>Question {currentIndex + 1} of {finalPracticeQuiz.length}</span>
      </div>

      <div className="quiz-layout">
        <div className="quiz-main">
          {isFinished && (
            <div className="quiz-results" role="status">
              <div>
                <span className="quiz-kicker">Score</span>
                <h3>{correctCount} of {finalPracticeQuiz.length} correct ({scorePercent}%)</h3>
                <p>{answeredCount} answered, {checkedCount} checked, {finalPracticeQuiz.length - answeredCount} unanswered.</p>
              </div>
              <button type="button" className="secondary-button" onClick={resetQuiz}>
                Reset
              </button>
            </div>
          )}

          <article className="question-card">
            <div className="question-section-divider">
              <span>{currentUnitLabel}</span>
            </div>

            <div className="question-meta">
              <span>{currentUnitLabel}</span>
              <span>Source #{currentQuestion.sourceNumber}</span>
              <span>{showFeedback ? (currentIsCorrect ? 'Correct' : 'Wrong') : selectedAnswer ? 'Answered' : 'Unanswered'}</span>
            </div>

            <h3>{currentQuestion.prompt}</h3>

            <div className="option-list" role="radiogroup" aria-label="Answer choices">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = showFeedback && currentQuestion.answer === option.id;
                const isIncorrect = showFeedback && isSelected && selectedAnswer !== currentQuestion.answer;

                return (
                  <button
                    key={option.id}
                    type="button"
                    className={[
                      'option-button',
                      isSelected ? 'selected' : '',
                      isCorrect ? 'correct' : '',
                      isIncorrect ? 'incorrect' : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => setAnswer(option.id)}
                    role="radio"
                    aria-checked={isSelected}
                    disabled={isCurrentRevealed && !isFinished}
                  >
                    <span className="option-letter" aria-hidden="true">{option.id}</span>
                    <span>{option.text}</span>
                  </button>
                );
              })}
            </div>

            {showFeedback && (
              <div className={`answer-explanation ${currentIsCorrect ? 'correct' : 'incorrect'}`} role="status">
                <span className="quiz-kicker">
                  {currentIsCorrect ? 'Correct' : 'Wrong'} · Answer {currentQuestion.answer}
                </span>
                <p>
                  {currentIsCorrect
                    ? `You chose ${selectedAnswer}, which is right. `
                    : `You chose ${selectedAnswer}; the correct answer is ${currentQuestion.answer}. `}
                  {currentQuestion.explanation || 'Review the key idea in the question and compare each answer choice against the definition or calculation.'}
                </p>
              </div>
            )}

            <div className="question-actions">
              <button type="button" className="secondary-button" onClick={() => goToQuestion(currentIndex - 1)} disabled={currentIndex === 0}>
                Previous
              </button>
              <button type="button" className="secondary-button" onClick={clearAnswer} disabled={isFinished || isCurrentRevealed || !selectedAnswer}>
                Clear
              </button>
              <button
                type="button"
                className={`secondary-button ${flagged.has(currentQuestion.id) ? 'active' : ''}`}
                onClick={toggleFlag}
              >
                {flagged.has(currentQuestion.id) ? 'Unflag' : 'Flag'}
              </button>
              <button
                type="button"
                className="primary-button"
                onClick={handlePrimaryAction}
                disabled={currentIndex === finalPracticeQuiz.length - 1 && (!selectedAnswer || isCurrentRevealed)}
              >
                {selectedAnswer && !isCurrentRevealed && !isFinished ? 'Check Answer' : 'Next Question'}
              </button>
            </div>
          </article>
        </div>

        <aside className="quiz-sidebar" aria-label="Quiz progress">
          <div className="quiz-stat-row">
            <div>
              <span className="stat-label">Answered</span>
              <strong>{answeredCount}/{finalPracticeQuiz.length}</strong>
            </div>
            <div>
              <span className="stat-label">Checked</span>
              <strong>{checkedCount}</strong>
            </div>
          </div>
          <div className="flag-count">
            <span className="stat-label">Flagged</span>
            <strong>{flaggedCount}</strong>
          </div>

          <div className="question-map-heading">
            <h3>Question Map</h3>
            <span>{progressPercent}% done</span>
          </div>

          <div className="question-jump-grid">
            {finalPracticeQuiz.map((question, index) => {
              const isCurrent = index === currentIndex;
              const isAnswered = Boolean(answers[question.id]);
              const isFlagged = flagged.has(question.id);
              const isReviewed = revealed.has(question.id) || isFinished;
              const isCorrect = isReviewed && answers[question.id] === question.answer;
              const isIncorrect = isReviewed && isAnswered && answers[question.id] !== question.answer;
              const unitLabel = getUnitLabel(question.chapter);
              const previousUnitLabel = index > 0 ? getUnitLabel(finalPracticeQuiz[index - 1].chapter) : null;
              const startsSection = index === 0 || previousUnitLabel !== unitLabel;

              return (
                <React.Fragment key={question.id}>
                  {startsSection && (
                    <div className="question-map-section">
                      <span>{unitLabel}</span>
                    </div>
                  )}
                  <button
                    type="button"
                    className={[
                      'jump-button',
                      isCurrent ? 'current' : '',
                      isAnswered ? 'answered' : '',
                      isFlagged ? 'flagged' : '',
                      isCorrect ? 'correct' : '',
                      isIncorrect ? 'incorrect' : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => goToQuestion(index)}
                    aria-label={`Go to question ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                </React.Fragment>
              );
            })}
          </div>

          <button type="button" className="finish-button" onClick={() => setIsFinished(true)} disabled={isFinished}>
            Finish Quiz
          </button>
        </aside>
      </div>
    </section>
  );
};

export default QuizPanel;
