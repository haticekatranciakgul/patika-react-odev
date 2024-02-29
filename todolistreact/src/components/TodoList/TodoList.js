import React from 'react'
import { useState } from 'react'
import './TodoList.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function TodoList() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    function handleDelete(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc' }} >
                    <Grid sx={{textAlign:'center' }}
                       
                    >
                         <h1>Todo List</h1>
                        <form>
                            <input type='text' value={inputValue} onChange={handleChange} />
                            <button onClick={handleSubmit}>Add Todo</button>
                        </form>
                        <ul>
                            {todos.map((todo, index) => (
                                <li key={index}>{todo}
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Box>
            </Container>

        </div>
    )
}

export default TodoList;