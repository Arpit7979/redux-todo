import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { removetodo } from '../features/todoSlice';

function Todo() {
  const todos =  useSelector(state => state.todos)
  const dispatch = useDispatch();
  return (
    <>
      {
        todos.map(todo=>(
            <li key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(removetodo(todo.id))}>Remove</button>
            </li>
        ))
      }
    </>
  )
}

export default Todo
