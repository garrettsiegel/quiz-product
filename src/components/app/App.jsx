import { useState } from 'react'
import { GameContext } from '../globalContext'
import { Nav } from '../nav/Nav'
import { Quiz } from '../quiz/Quiz'
import styles from './App.module.css'
import { questions } from '../questions'
import { GameOver } from '../quiz/game-over/GameOver'

function App() {
  const [gameState, setGameState] = useState({
    currentQuestion: 0,
    score: 0,
    isGameOver: false,
    questions: questions,
  })

  return (
    <GameContext value={[gameState, setGameState]}>
      <main>
        <Nav />

        <div className={styles['quiz-container']}>
          {gameState.isGameOver ? <GameOver /> : <Quiz />}
        </div>
      </main>
    </GameContext>
  )
}

export default App
