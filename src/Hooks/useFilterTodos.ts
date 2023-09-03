import { TODO_FILTERS } from '../consts'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const useFilterTodos = () => {

    const {todos, selected} = useSelector((state: RootState) => state.todos)

    const filterTodos = todos.filter(todo=>{
        if(selected === TODO_FILTERS.ACTIVE) return !todo.completed
        if(selected === TODO_FILTERS.COMPLETED) return todo.completed
        return todo
     }) 

    return {
         filterTodos,
         selected
      }
}

export default useFilterTodos