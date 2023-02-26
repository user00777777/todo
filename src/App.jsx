
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import TodoItem from './Components/TodoItem';
import TodoForm from './Components/TodoForm';
import {  decrement, increment, iscompleted } from './SliceReducers/todoReducer';
import TodoList from './Components/TodoList';



function App() {
  let[text,setText]=  useState('')
  let[num,setNum]=  useState()
  let disputch=useDispatch()
  let state= useSelector((state)=>  state.todos)
  let numb= useSelector((state)=>  state.todos.numb)
function dis() {
  disputch( decrement(text))
  disputch(increment(text))
setText(" ")
}
  return ( <div className='App'>
<h1>Привіт</h1>
<TodoForm update={setText}
text={text}
actionTodo={dis}
/>
<TodoList/>
{/* <div className='nu'>{numb}</div> */}
    </div>
  )}


export default App;
