import React from 'react'
import { useDispatch } from 'react-redux';
import { iscompleted, removeTodo } from '../SliceReducers/todoReducer';

export default function TodoItem({id,num,completed,n}) {



    let disputch=useDispatch()

  return (
  
        <li><input
    type='checkbox'
    checked={completed}
    onChange={() => disputch(iscompleted({ id }))}
  />
  <span>{num}</span>
  <span onClick={() => disputch(removeTodo({id}))}>&times;</span>
{/* <div>{n}</div> */}
  </li>
  )
}
