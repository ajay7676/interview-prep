import React,{ useState } from 'react'
import './App.css'
import Header from './components/Header'
import TODOHero from './components/TODOHero'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  useState
  const [todos, setTodos] = useState([
    {title: "Some Task" , id: self.crypto.randomUUID(), is_completed: false },
    {title: "Some Task" , id: self.crypto.randomUUID(), is_completed: false },
    {title: "Some Task" , id: self.crypto.randomUUID(), is_completed: false }
  ]);

  console.log("array" ,todos)
  return (
    <>
      <div className="wrapper">
      <Header />
        <TODOHero />
        <Form />
        <TodoList todos={todos}/>
      </div>
    </>
  )
}

export default App
