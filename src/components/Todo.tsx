import { useDispatch } from "react-redux"
import { onCompletedTodos, onDeleteTodo, updateTodos } from "../store/contenSlices/todoSlice"
import { type Todo as typeTodos } from "../types"
import { useEffect, useRef, useState } from "react"
import {BsCheckLg} from 'react-icons/bs'

const Todo: React.FC<typeTodos> = ({id,title,completed}) => {
   
  const dispatch = useDispatch()
  const [updateText, setupdateText] = useState(title)
  const [checked, setChecked] = useState(completed)
  const [isEditing, setIsEditing] = useState(false)
  const refInput =  useRef<HTMLInputElement>(null)

  const handlesChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement> ) => {
      const value = event.target.checked
      dispatch(
      onCompletedTodos({
      id,
      checked:value
       })
      ) 
      setChecked(value)
   }

  const handlesOnKeyDownUpdate = (event:React.KeyboardEvent<HTMLInputElement>)=> {
    if(event.key==='Enter'){
      if(updateText!==title){
        dispatch(
        updateTodos({
            id:id,
            title:updateText
           })
          ) 
       }
      if(updateText===''){
        dispatch(onDeleteTodo(id))
      }
        setIsEditing(false)
      }    
  }
   
   useEffect(()=>{
    refInput.current?.focus()
    },[isEditing])

   
  const className = isEditing?"bg-white flex justify-end h-full left-0 right-0 z-10 absolute":"hidden";

  return (
     <div className={isEditing?"base-flex":"base-flex border-b"}
      onDoubleClick={()=>setIsEditing(true)}
     >
      <label
       className={checked?"button-check text-blue-300 border-blue-300":"button-check"}
      >
      {checked&&<BsCheckLg color="rgb(147 197 253)" />}
       <input
       className="absolute right-0 left-0 opacity-0"
       type="checkbox"
       checked={completed}
       onChange={handlesChangeCheckbox}/>
      </label>

       <label className={checked?"line-through text-gray-500 transition":''}>{title}</label>
       <div className={className}>
       <input ref={refInput}
        type="text" 
        onBlur={()=>setIsEditing(false)}
        onChange={e=>setupdateText(e.target.value)}
        className="h-full px-4 w-[95%] outline-blue-300" 
        onKeyDown={handlesOnKeyDownUpdate}
        value={updateText}
       />
       </div>
       <button
        className=" absolute right-1 mr-4 text-2xl p-2 text-gray-400 hover:text-blue-300" 
        onClick={()=>dispatch(onDeleteTodo(id))}
        >x</button>
    </div>
  )
}

export default Todo