import Todos from './components/Todos'
import Footer from './components/Footer'
import Header from './components/Header'
import CreateTodos from './components/CreateTodos'
import getTodos from './server/getTodos'

function App (): JSX.Element{
  
  getTodos()
      
  return (
    <>
    <div className='flex flex-col gap-2 max-w-[600px] mx-auto'>
    <Header/>
    <div className='flex flex-col shadow-lg shadow-slate-300 '>
    <CreateTodos/>
    <Todos />
    <Footer/>
    </div>
  </div>
  </>
  )
}

export default App
