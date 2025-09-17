import { VscTrash } from 'react-icons/vsc'
import styles from './TodoDone.module.css'

export default function TodoDone({ text, onDelete }) {
  return (
    <div className={styles.todoDone}>
      <h3 className={styles.todoDoneText}>{text}</h3>
      <VscTrash className={styles.todoDoneIcon} onClick={onDelete} />
    </div>
  )
}
