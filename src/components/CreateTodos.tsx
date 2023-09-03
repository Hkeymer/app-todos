import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../store/contenSlices/todoSlice'

const CreateTodos:React.FC = () => {
     
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    
     const handleSubmit = (event:React.FormEvent<HTMLFormElement>): void =>{
     event.preventDefault()
      dispatch(addTodos(text))
     setText('')
     }
     

  return ( 
    <form onSubmit={handleSubmit} className='border-b' >
    <input
     className='w-full py-5 px-20 text-xl outline-blue-300'
     type='text'
     autoFocus
     placeholder='What do you want to do ?'
     value={text}
     onChange={e=>setText(e.target.value)}
    />
    </form>
  )
}

export default CreateTodos