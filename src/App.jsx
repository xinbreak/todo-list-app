import { useState } from 'react'
import Header from './components/Header/Header'
import WeeklyProgress from './components/Successes/WeeklyProgress'
import TodoList from './components/TodoList/TodoList'
import AddTodoModal from './components/UI/AddTodoModal'
import './App.css'

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [todos, setTodos] = useState([])
  const [todosDone, setTodosDone] = useState([])

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
    setTodosDone(todosDone.filter((_, idx) => idx !== index))
  }

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const addTodoDone = (newTodoDone) => {
    setTodosDone([...todosDone, newTodoDone])
  }

  return (
    <>
      <Header setModalActive={() => setModalActive(true)} />
      <WeeklyProgress />
      <TodoList
        todos={todos}
        todosDone={todosDone}
        deleteTodo={deleteTodoHandler}
        addTodoDone={addTodoDone}
      />
      <AddTodoModal
        isOpen={modalActive}
        onClose={() => setModalActive(false)}
        onAddTodo={addTodo}
      />
    </>
  )
}

export default App
