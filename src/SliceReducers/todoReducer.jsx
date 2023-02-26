import { createSlice } from "@reduxjs/toolkit";

let todoReducer= createSlice({
name:'todos',
initialState:{
    todos:[],
    numb:null




},

reducers:{

increment (state,action){
state.todos.push({num:action.payload,id:new Date().toISOString(),completed:false})
},
decrement (state,action){
 switch (1) {
    case 1:if (action.payload==Number(action.payload)) state.numb+=Number( action.payload)
        
        break;
 
    default:state
        
 }},
 iscompleted(state,action){


    
    const toggledTodo = state.todos.find(todo => todo.id==action.payload.id
    );
    toggledTodo.completed = !toggledTodo.completed;

 },removeTodo (state,action){
state.todos=state.todos.filter((todo)=> todo.id!==action.payload.id)


 }



}


}


)
export const{increment,decrement,iscompleted,removeTodo}=todoReducer.actions
export default todoReducer.reducer