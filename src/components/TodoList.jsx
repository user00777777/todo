import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

export default function TodoList() {
let state=useSelector(state=>state.todos.todos)
let numb=useSelector(state=>state.todos.numb)


  return (
    <div>{state.map((el)=><TodoItem key={el.id} {...el} n={numb}/>)}</div>
  )
}
