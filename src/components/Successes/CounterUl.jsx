import Counter from './Counter'
import styles from './CounterUl.module.css'

const items = ['Создано', 'Завершено', 'Удалено']

export default function CounterUl() {
  return (
    <ul className={styles.counterUl}>
      {items.map((item) => (
        <Counter text={item} />
      ))}
    </ul>
  )
}
