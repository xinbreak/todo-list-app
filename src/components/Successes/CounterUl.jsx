import Counter from './Counter'
import styles from './CounterUl.module.css'

const items = [, ,]

export default function CounterUl({ countMade, countDone, countDelete }) {
  return (
    <ul className={styles.counterUl}>
      <Counter text="Создано" count={countMade} />
      <Counter text="Завершено" count={countDone} />
      <Counter text="Удалено" count={countDelete} />
    </ul>
  )
}
