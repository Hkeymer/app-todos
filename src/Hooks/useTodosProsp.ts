import {useState} from 'react'
import { Todo, filterSelectValue, typeId, typeTitle } from '../types'
import { ListTodos } from '../data'
import { TODO_FILTERS } from '../consts'


//NOTA:ESTE HOOKS SOLO SE DEBE USAR PARA TRABAR SIN LOS REDUX, LO USAMOS DE FORMA GLOBAL EN EL COMPONETE 
// APP PARA TRABAR CON PROSP; 

const useTodosProsp = () => {

    const [todos, setTodos] = useState(ListTodos);
    // Usamos el tipo "<filterSelectValue>" para indicarle al useState el intervalo de elementos que debe usar;
    const [firterSelectedState, setfirterSelectedState] = useState<filterSelectValue>(TODO_FILTERS.ALL);

  
    const onDeleteTodo = ({id}:typeId): void => {
          const newTodos = todos.filter(todo=>todo.id !== id)
          setTodos(newTodos)
  
    }

    const onCompleted = ({ id, completed }: Pick<Todo,'id' | 'completed'>): void => {
          const newTodos = todos.map(todo=>{
               if(todo.id ===  id){
                return {
                  ...todo,
                  completed
                }
               }
  
               return todo
          })
  
          setTodos(newTodos)
   }
  
  const onClearCompleted = ()=> {
       if(window.confirm('Are you sure about this step?')){
        const newTodos = todos.filter(todo=> !todo.completed)
        setTodos(newTodos)
      }      
   }

  const onAddTodos = ({title}:typeTitle) =>{
         if(title){
            setTodos([
              ...todos,
              {
                id: crypto.randomUUID(),
                title,
                completed:false
              }
            ]
           )
        }
   }

 const onUpdateTodos = ({id}:typeId,{title}:typeTitle): void =>{
        // usamos el metodo map para modificar los "todos" que cumplan la condicion;
        todos.map(todo=>todo.id===id?todo.title=title:todo)
   }

  const onSelectedValue = (value: filterSelectValue)=> {
    setfirterSelectedState(value)
   }

   const filterTodos =  todos.filter(todo=>{
    if(firterSelectedState === TODO_FILTERS.ACTIVE) return !todo.completed
    if(firterSelectedState === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  }) 

  return{
        todos,
        filterTodos,
        onCompleted,
        onClearCompleted,
        onDeleteTodo,
        onAddTodos,
        onUpdateTodos,
        onSelectedValue,
   }
  
}

export default useTodosProsp