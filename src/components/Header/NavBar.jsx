import NavElement from './NavElement'
import { CgAddR } from 'react-icons/cg'
import styles from './NavBar.module.css'

const items = ['Дом', 'Работа', 'Спорт']

export default function NavBar() {
  return (
    <ul className={styles.todoNavBar}>
      {items.map((item) => (
        <NavElement>{item}</NavElement>
      ))}
      <NavElement className={styles.addCategorie}>
        <button className={styles.navBarButton}>
          <CgAddR className={styles.addCategorieIcon} />
          Добавить
        </button>
      </NavElement>
    </ul>
  )
}
