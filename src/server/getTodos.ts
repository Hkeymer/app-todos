import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { getData } from '../store/contenSlices/todoSlice'

const getTodos = () => {
    
   const {todos} = useSelector((state:RootState)=>state.todos)
   const dispatch = useDispatch()
    
   // "useEffect" para obtener la data del localStorage
   useEffect(() => {
    const todos = localStorage.getItem('todos')
    if(todos){
       dispatch(getData(JSON.parse(todos)))
      }
   }, [])

    // "useEffect" para actualizar la data del localStorage
    useEffect(() => {
       localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])

    
}

export default getTodos