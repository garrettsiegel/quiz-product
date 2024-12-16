import { useContext, useState } from 'react'
import { GameContext } from '../globalContext'
import Header from './header/Header'
import styles from './Quiz.module.css'
import { questions } from '../questions'
import { AnswerText } from './answer-text/AnswerText'

export function Quiz() {
  const [gameState, setGameState] = useContext(GameContext)
  const [isAnswered, setIsAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleAnswer = (answer) => {
    if (isAnswered) return

    const currentQuestion = gameState.questions[gameState.currentQuestion]
    const isCorrect = answer === currentQuestion.correctAnswer

    setSelectedAnswer(answer)
    setIsAnswered(true)

    const updateGameState = () => {
      setGameState((prev) => ({
        ...prev,
        score: prev.score + (isCorrect ? 1 : 0),
        currentQuestion: prev.currentQuestion + 1,
        isGameOver: prev.currentQuestion === questions.length - 1,
      }))
      setIsAnswered(false)
      setSelectedAnswer(null)
    }

    setTimeout(updateGameState, 1200)
  }

  const currentQuestion = gameState.questions[gameState.currentQuestion]

  return (
    <aside className={styles.quiz}>
      <Header />

      <div className={styles['quiz-content']}>
        <p className={styles.question}>{currentQuestion.question}</p>

        <ul className={styles.ul}>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <button
                className={styles.btn}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>

        <AnswerText
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
          currentQuestion={currentQuestion}
        />
      </div>
    </aside>
  )
}
