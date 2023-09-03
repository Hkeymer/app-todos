import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { typeId, type ListOfTodos, filterSelectValue, typeTitle, Todo } from '../../types'
import { TODO_FILTERS } from '../../consts'
import { ListTodos } from '../../data'

export interface todoState {
  todos: ListOfTodos
  filTodos: ListOfTodos
  typeFilter:boolean
  activeCount: number
  completedCount: number
  selected: filterSelectValue // Declaramos el estado "selected" por que luego vamos usar su valor en las clases de css;                                                                 
}

const initialState: todoState = {
    todos:[],
    filTodos:[],
    typeFilter:false, //creamos un estodo "typeFilter" para indicar al componente que se va ejecutar una accion de typo filter;
    activeCount:0,
    completedCount:0,
    selected:<filterSelectValue>TODO_FILTERS.ALL
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
     getData:(state,accion:PayloadAction<ListOfTodos>)=>{
              state.todos = accion.payload
     },
    onDeleteTodo:(state,action:PayloadAction<typeId['id']>)=>{
        const newTodos = state.todos.filter(item=>item.id != action.payload);
        state.todos = newTodos;
          },

    onCompletedTodos:(state,action:PayloadAction<{id:typeId['id'],checked:boolean}>)=>{
            
         const {id,checked} = action.payload

         const newTodos = state.todos.map(item=>{
           if(item.id===id){
             return{
                ...item,
               completed:checked
             }
           }
             return item;
        });
        state.todos = newTodos;

      },

    onActiveCount:(state)=>{
      state.activeCount = state.todos.filter(item=>!item.completed)?.length
    },

    onSelectedValueFiter:(state,action:PayloadAction<filterSelectValue>)=>{
                   state.selected = action.payload    
     },

    addTodos: (state,action:PayloadAction<typeTitle['title']>)=>{
            
          if(action.payload){
            const newTodos = [...state.todos,{
              id: crypto.randomUUID(),
              title:action.payload,
              completed:false
            }]
            state.todos= newTodos}
     },
    updateTodos:(state,accion:PayloadAction<{id:typeId['id'],title:typeTitle['title']}>)=>{
             const{id,title} = accion.payload;
             state.todos.map(todo=>todo.id===id?todo.title=title:todo)  
                  
    },
     onClearTodosCompleted: (state) =>{  
        const newTodos = state.todos.filter(todo=>!todo.completed)
        state.todos = newTodos;    
     }

  },
})

// Action creators are generated for each case reducer function
export const { 
  getData,
  onActiveCount, 
  onCompletedTodos, 
  onDeleteTodo, 
  onClearTodosCompleted,
  onSelectedValueFiter, 
  addTodos,
  updateTodos
} = todosSlice.actions

export default todosSlice.reducer