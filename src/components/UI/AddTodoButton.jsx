import { RiAddCircleLine } from 'react-icons/ri'
import styles from './AddTodoButton.module.css'

export default function AddTodoButton() {
  return (
    <div>
      <button className={styles.todoButton}>
        {<RiAddCircleLine className={styles.todoIcon} />}Новая задача
      </button>
    </div>
  )
}
