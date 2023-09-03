import React from 'react'
import Todo from './Todo'
import useFilterTodos from '../Hooks/useFilterTodos'

// interface Prosp {
//       todos:ListOfTodos
//       // onDeleteTodo: ({id}:typeId) => void
//       // onUpdateTodo: ({id}:typeId) => void
//       // onCompleted:  ({ id, completed }: Pick<ifcTodos,'id' | 'completed'>) => void
// }

const Todos:React.FC = () => {
   
   const {filterTodos} = useFilterTodos()

  return (
    <div>
      {
      filterTodos.map(item=>(
        <div key={item.id} 
           className={item.completed?'completed':'pending'}>
             <Todo
             key={item.id} 
             id={item.id} 
             title={item.title} 
             completed={item.completed}
            //  onUpdateTodo={onUpdateTodo} 
            //  onDeleteTodo={onDeleteTodo}
            //  onCompleted={onCompleted}
             />
            </div>
    ))      
        }</div>
  )
}

export default Todos