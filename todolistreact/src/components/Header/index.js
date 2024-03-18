import React from 'react'
import NewTodoForm from './NewTodoForm';

function Header() {
  return (
    <header className="header">
    <h1>Todos</h1>
    <NewTodoForm/>
  </header>
  )
}

export default Header;