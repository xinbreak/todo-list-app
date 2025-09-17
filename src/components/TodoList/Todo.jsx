import styles from './Todo.module.css'
import { VscTrash, VscCheck } from 'react-icons/vsc'

export default function Todo({ todo, onComplete, onDelete }) {
  return (
    <div className={styles.todo}>
      <h3 className={styles.todoText}>{todo.text}</h3>
      <VscCheck className={styles.todoDone} onClick={onComplete} />
      <VscTrash className={styles.todoDelete} onClick={onDelete} />
    </div>
  )
}
