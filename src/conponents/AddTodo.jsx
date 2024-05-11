import React, { useState } from 'react'
import {  useDispatch } from 'react-redux';
import { addtodo } from '../features/todoSlice';

const AddTodo = () => {
    const [input,setInput]= useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
      e.preventDefault()
      dispatch(addtodo(input))
      setInput("")

    }

  return (
    <form action="" onSubmit={addTodoHandler}>
        <input type="text" 
        placeholder='Enter a to-do' 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button type='submit'>Add todo</button>
    </form>
  )
}

export default AddTodo