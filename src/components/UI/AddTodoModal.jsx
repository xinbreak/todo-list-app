import Modal from 'react-modal'
import AddTodoForm from './AddTodoForm'
import styles from './AddTodoModal.module.css'

export default function AddTodoModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.modal}
      className={styles.modalWrapper}
    >
      <div className={styles.modalContent}>
        <h1 className={styles.modalName}>Добавить новую задачу</h1>
        <h2 className={styles.modalTodoName}>Что нужно сделать?</h2>
        <AddTodoForm />
        <div className={styles.modalButtons}>
          <button className={styles.modalCloseButton} onClick={() => onClose()}>
            Отменить
          </button>
          <button className={styles.modalAddButton}>Добавить</button>
        </div>
      </div>
    </Modal>
  )
}
