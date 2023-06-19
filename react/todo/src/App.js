import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuid4 from 'uuid/dist/v4';

function App() {
  const LOCAL_STORAGE_KEY = "todoApp.todos"
  const todoNameRef = useRef()
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    let name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid4(), name: name, completed: false }]
    })
    todoNameRef.current.value = null
  }

  function toggleTodo(id) {
    let todosCopy = [...todos]
    let todo = todosCopy.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(todosCopy)
  }

  function handleClearCompletedTodos() {
    let todosCopy = todos.filter(todo => !todo.completed)
    setTodos(todosCopy)
  }

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearCompletedTodos}>Clear completed</button>
      <div>{todos.filter(todo => !todo.completed).length} Left todo</div>
    </React.Fragment>
  );
}

export default App;
