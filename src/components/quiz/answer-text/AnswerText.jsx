import styles from './AnswerText.module.css'

export function AnswerText({ isAnswered, selectedAnswer, currentQuestion }) {
  return (
    <div className={styles['answer-text']}>
      {isAnswered && (
        <div>
          {selectedAnswer === currentQuestion.correctAnswer ? (
            <p>Correct</p>
          ) : (
            <p>Incorrect</p>
          )}
        </div>
      )}
    </div>
  )
}
