import { BiNotepad } from 'react-icons/bi'
import AddTodoButton from '../UI/AddTodoButton'
import sun from '../UI/themeIcons/sun.svg'
import moon from '../UI/themeIcons/moon.svg'
import styles from './Header.module.css'

export default function Header({ setModalActive, toggleTheme, currentTheme }) {
  return (
    <header className={styles.todoHeader}>
      <div className={styles.todoLogo}>
        <BiNotepad className={styles.todoIcon} />
        <h1 className={styles.todoHeaderText}>ToDo</h1>
      </div>
      <button onClick={toggleTheme} className={styles.themeButton}>
        <img
          src={currentTheme === 'light' ? moon : sun}
          alt="theme icon"
          className={styles.themeIcon}
        />
      </button>
      <AddTodoButton setModalActive={() => setModalActive(true)} />
    </header>
  )
}
