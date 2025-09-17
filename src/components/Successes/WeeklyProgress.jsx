import CounterUl from './CounterUl'
import styles from './WeeklyProgress.module.css'

export default function WeeklyProgress({ countMade, countDone, countDelete }) {
  return (
    <div className={styles.weeklyProgressBlock}>
      <h1 className={styles.weeklyProgressText}>Успехи за неделю</h1>
      <CounterUl
        countMade={countMade}
        countDone={countDone}
        countDelete={countDelete}
      />
    </div>
  )
}
