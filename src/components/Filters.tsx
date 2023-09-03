import React from 'react'
import { FILTERS_BUTTONS } from '../consts'
import useFilterTodos from '../Hooks/useFilterTodos'
import { filterSelectValue } from '../types'
import { onSelectedValueFiter } from '../store/contenSlices/todoSlice'
import { useDispatch } from 'react-redux'


const Filters: React.FC = () => {           
  
    const diparch = useDispatch() 
    const { selected } = useFilterTodos()


  return (
    <div>
        {
        // La propieda .entries() de "Object" la usamos para coverti n objeto en array;
        Object.entries(FILTERS_BUTTONS).map(([key,{ href, literal }])=>{
          
           const isSelected = key === selected
           const className = isSelected ? "mr-4 px-2 rounded border-2 border-blue-300" : 'mr-4'

            return(
                <a key={key}
                 href={href}
                 className={className}
                 onClick={e=>{
                    e.preventDefault()
                    diparch(onSelectedValueFiter(key as filterSelectValue)) 
                 }}
                 >
                {literal}
                </a>
            )
         })
        }
    </div>
  )
}

export default Filters