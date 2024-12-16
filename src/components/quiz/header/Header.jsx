import { useContext } from 'react'
import styles from './Header.module.css'
import { GameContext } from '../../globalContext'

export default function Header() {
  const [gameState] = useContext(GameContext)
  return (
    <div className={styles.header}>
      <span>Question {gameState.currentQuestion + 1} / {gameState.questions.length}</span>
      <span>Score: {gameState.score}</span>
    </div>
  )
}
