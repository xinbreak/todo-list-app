import { useState } from 'react'
import Modal from 'react-modal'
import styles from './AddTodoModal.module.css'

export default function AddTodoModal({ isOpen, onClose, onAddTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (!text.trim()) return
    onAddTodo(text)
    setText('')
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.modal}
      className={styles.modalWrapper}
      onRequestClose={onClose} // чтобы можно было закрыть по клику вне модалки или Esc
    >
      <div className={styles.modalContent}>
        <h1 className={styles.modalName}>Добавить новую задачу</h1>
        <h2 className={styles.modalTodoName}>Что нужно сделать?</h2>
        <div className={styles.todoFormContainer}>
          <form onSubmit={onSubmitHandler}>
            <input
              placeholder="Введите что нужно сделать"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </form>
        </div>
        <div className={styles.modalButtons}>
          <button className={styles.modalCloseButton} onClick={onClose}>
            Отменить
          </button>
          <button className={styles.modalAddButton} onClick={onSubmitHandler}>
            Добавить
          </button>
        </div>
      </div>
    </Modal>
  )
}
