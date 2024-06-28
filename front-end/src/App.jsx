
import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(function () { 
      fetch("https://sum-server.100xdevs.com/todos").then(res => {
        res.json().then(val => {
          console.log(val)
          setTodos(val.todos)
        }
        )
      }) 

  }, [])


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
