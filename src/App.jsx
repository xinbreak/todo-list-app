import { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import AddTodoModal from './components/UI/AddTodoModal'
import Header from './components/Header/Header'
import WeeklyProgress from './components/Successes/WeeklyProgress'
import './App.css'

export default function App() {
  const [modalActive, setModalActive] = useState(false)
  const [todos, setTodos] = useState([])
  const [todosDone, setTodosDone] = useState([])

  const addTodo = (newTodoText) => {
    const newTodo = { id: Date.now(), text: newTodoText }
    setTodos([...todos, newTodo])
  }

  const completeTodo = (id) => {
    const completed = todos.find((t) => t.id === id)
    if (!completed) return
    setTodos(todos.filter((t) => t.id !== id))
    setTodosDone([...todosDone, completed])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
    setTodosDone(todosDone.filter((t) => t.id !== id))
  }

  return (
    <>
      <Header setModalActive={() => setModalActive(true)} />
      <WeeklyProgress />
      <TodoList
        todos={todos}
        todosDone={todosDone}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo}
      />
      <AddTodoModal
        isOpen={modalActive}
        onClose={() => setModalActive(false)}
        onAddTodo={addTodo}
      />
    </>
  )
}
