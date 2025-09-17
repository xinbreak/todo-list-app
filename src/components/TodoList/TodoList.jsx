import Todo from './Todo'
import TodoDone from './TodoDone'
import styles from './TodoList.module.css'

export default function TodoList({ todos, todosDone, deleteTodo }) {
  return (
    <div className={styles.todoListBlock}>
      <h1 className={styles.todoListText}>Активные задачи</h1>
      {!todos.length && <h4>Активных задач нет</h4>}
      {todos.map((todo) => (
        <Todo text={todo} />
      ))}
      <h1 className={styles.todoListText}>Завершенные задачи</h1>
      {!todosDone.length && <h4>Завершенных задач нет</h4>}
      {todosDone.map((todo) => (
        <TodoDone text={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}
