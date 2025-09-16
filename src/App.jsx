import { useState } from 'react'
import Header from './components/Header/Header'
import WeeklyProgress from './components/Successes/WeeklyProgress'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <WeeklyProgress />
      <TodoList />
    </>
  )
}

export default App
