import React from 'react'

const Header:React.FC = () => {
  return (
    <div className=' flex w-full bg-slate-100 justify-center py-4  '>
        <h1 className='text-5xl' >todos</h1>
        <img 
        style={{ width: '60px', height:'auto' }}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
        />
    </div>
  )
}

export default Header