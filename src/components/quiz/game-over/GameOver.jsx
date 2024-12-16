import styles from './GameOver.module.css'
import { useContext } from 'react'
import { GameContext } from '../../globalContext'

export function GameOver() {
  const [gameState, setGameState] = useContext(GameContext)
  return (
    <div className={styles['game-over']}>
      <h1>Game Over</h1>
      {gameState.score <= 1 && (
        <div>
          <p>You got {gameState.score} out of {gameState.questions.length} right.</p>
          <p>Go study!</p>
        </div>
      )}
      {gameState.score > 1 && gameState.score < 5 && (
        <div>
          <p>You got {gameState.score} out of {gameState.questions.length} right.</p>
          <p>You can do better!</p>
        </div>
      )}
      {gameState.score >= 5 && (
        <div>
          <p>You got {gameState.score} out of {gameState.questions.length} right.</p>
          <p>You&apos;re a pro!</p>
        </div>
      )}

      <button
        className={styles.btn}
        onClick={() => {
          setGameState((prev) => ({
            ...prev,
            currentQuestion: 0,
            score: 0,
            isGameOver: false,
          }))
        }}
      >
        Play Again
      </button>

    </div>
  )
}
