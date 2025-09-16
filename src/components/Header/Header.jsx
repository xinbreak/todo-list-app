import { BiNotepad } from 'react-icons/bi'
import NavBar from './NavBar'
import AddTodoButton from '../UI/AddTodoButton'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.todoHeader}>
      <div className={styles.todoLogo}>
        <BiNotepad className={styles.todoIcon} />
        <h1 className={styles.todoHeaderText}>ToDo</h1>
      </div>
      <NavBar />
      <AddTodoButton />
    </header>
  )
}
