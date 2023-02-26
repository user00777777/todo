import React from 'react'

export default function TodoForm({update,text,actionTodo}) {
    console.log();
    
  return (
    <div><input onChange={(e)=>update( e.target.value)} value={text} />
    <button onSubmit={true} onClick={actionTodo}>plus</button></div>
  )
}
