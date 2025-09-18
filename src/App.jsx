import { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import TodoList from './components/TodoList/TodoList'
import AddTodoModal from './components/UI/AddTodoModal'
import Header from './components/Header/Header'
import WeeklyProgress from './components/Successes/WeeklyProgress'
import './components/UI/Calendar.css'
import './App.css'

export default function App() {
  const [modalActive, setModalActive] = useState(false)
  const [todos, setTodos] = useState([])
  const [todosDone, setTodosDone] = useState([])
  const [countMade, setCountMade] = useState(0)
  const [countDone, setCountDone] = useState(0)
  const [countDelete, setCountDelete] = useState(0)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const addTodo = (newTodoText) => {
    const newTodo = { id: Date.now(), text: newTodoText }
    setTodos([...todos, newTodo])
    setCountMade(countMade + 1)
  }

  const completeTodo = (id) => {
    const completed = todos.find((t) => t.id === id)
    if (!completed) return
    setTodos(todos.filter((t) => t.id !== id))
    setTodosDone([...todosDone, completed])
    setCountDone(countDone + 1)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
    setTodosDone(todosDone.filter((t) => t.id !== id))
    setCountDelete(countDelete + 1)
  }

  return (
    <>
      <Header
        setModalActive={() => setModalActive(true)}
        toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        currentTheme={theme}
      />
      <div className="container">
        <div className="containerListAndProgress">
          <WeeklyProgress
            countMade={countMade}
            countDone={countDone}
            countDelete={countDelete}
          />

          <TodoList
            todos={todos}
            todosDone={todosDone}
            onCompleteTodo={completeTodo}
            onDeleteTodo={deleteTodo}
          />
        </div>
        <Calendar />
      </div>
      <AddTodoModal
        isOpen={modalActive}
        onClose={() => setModalActive(false)}
        onAddTodo={addTodo}
      />
    </>
  )
}
