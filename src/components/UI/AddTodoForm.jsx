import { useState } from 'react'
import styles from './AddTodoForm.module.css'

export default function AddTodoForm() {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Введите что нужно сделать"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </form>
    </div>
  )
}
