import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todoValue, setTodoValue] = useState('')
  const [todos, setTodos] = useState([])

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    setTodoValue(todos[index])
    handleDeleteTodo(index)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

    setTodos(newTodoList)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App
