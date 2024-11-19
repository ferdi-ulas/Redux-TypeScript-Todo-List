import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TodoType } from '../types/Types';
import { createTodo } from '../redux/TodoSlice';

function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, useNewTodo] = useState("")

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Lütfen Todo Giriniz.")
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        useNewTodo("");
    }
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Todo Giriniz...' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => useNewTodo(e.target.value)} />
            <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
        </div>
    )
}

export default TodoCreate