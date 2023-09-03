import React from 'react'
import Filters from './Filters'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { onClearTodosCompleted } from '../store/contenSlices/todoSlice'

const Footer: React.FC = () => {
   const dispatch = useDispatch()
        
    const {todos} = useSelector((state: RootState) => state.todos)
    const activeCount = todos.filter(todo=>!todo.completed).length;
    const completedCount = todos.length- activeCount;

    const handleOnClearCompleted = () => {
      if(window.confirm(`¡You are about to delete ${completedCount} elements!`)){
          dispatch(onClearTodosCompleted())
      }  
    }
        
  return (
    <footer
     className='flex gap-16 items-center text-base px-4 py-3  flex-wrap'
     >
       <span>
       {activeCount} Taks pendign 
       </span>
       <ul className='flex '>
       <Filters/>
       </ul>
      <button  
       className={completedCount>0?
       "hover:underline":
      'hidden'} 
       onClick={handleOnClearCompleted}>Clear completed</button>
    </footer>
  )
}

export default Footer