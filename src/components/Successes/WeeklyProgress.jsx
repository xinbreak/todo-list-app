import CounterUl from './CounterUl'
import styles from './WeeklyProgress.module.css'

export default function WeeklyProgress() {
  return (
    <div className={styles.weeklyProgressBlock}>
      <h1 className={styles.weeklyProgressText}>Успехи за неделю</h1>
      <CounterUl />
    </div>
  )
}
