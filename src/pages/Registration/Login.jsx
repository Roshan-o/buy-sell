import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-gray-400 h-screen flex justify-center items-center'>
      <form className='bg-gray-300 p-10'>
        <div className='grid'>
          <p className='italic mx-2 font-semibold'>UserName:</p>
          <input placeholder='Enter Name' className='bg-gray-200 px-3 py-1'></input>
        </div>
        <div className='grid'>
          <p className='italic mx-2 font-semibold'>Password:</p>
          <input placeholder='Enter Password' className='bg-gray-200 px-3 py-1'></input>
        </div>
        <button className='bg-gray-400 my-2 w-full px-3 hover:shadow-2xl hover:scale-103 py-1'>Enter</button>
        <div className='flex justify-center items-center w-full text-sm'>Don't have account?<Link to='/Registration' className='hover:text-orange-300'>sign In</Link></div>
      </form>
    </div>
  )
}

export default Login
