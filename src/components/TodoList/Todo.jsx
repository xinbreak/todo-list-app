import styles from './Todo.module.css'
import { VscTrash, VscCheck } from 'react-icons/vsc'

export default function Todo({ text }) {
  return (
    <div className={styles.todo}>
      <h3 className={styles.todoText}>{text}</h3>
      <VscCheck className={styles.todoDone} />
      <VscTrash className={styles.todoDelete} />
    </div>
  )
}
