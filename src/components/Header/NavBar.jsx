import NavElement from './NavElement'
import styles from './NavBar.module.css'

const items = ['Дом', 'Работа', 'Спорт']

export default function NavBar() {
  return (
    <ul className={styles.todoNavBar}>
      {items.map((item) => (
        <NavElement>{item}</NavElement>
      ))}
    </ul>
  )
}
