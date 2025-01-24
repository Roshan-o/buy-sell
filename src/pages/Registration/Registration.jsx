import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

const Registration = () => {
  return (
    <div className='bg-gray-400 h-screen flex justify-center items-center'>
      <form className='bg-gray-300 p-10'>
        <div className='grid'>
          <p className='italic mx-2 font-semibold'>UserName:</p>
          <input placeholder='First Name' className='bg-gray-200 px-3 py-1 my-1'></input>
          <input placeholder='Last Name' className='bg-gray-200 px-3 py-1 my-1'></input>
        </div>
        <div className='grid'>
          <p className='italic mx-2 font-semibold'>Email:</p>
          <input placeholder='Email adress' className='bg-gray-200 px-3 py-1 my-1'></input>
        </div>
        <div className='flex'>
          <p className='italic mx-2 font-semibold my-1'>age:</p>
          <input className='bg-gray-200 px-3 py-1 my-1'></input>
        </div>

        <div className='grid'>
          <p className='italic mx-2 font-semibold'>Contact no.</p>
          <input placeholder='Contact no.' className='bg-gray-200 px-3 py-1'></input>
        </div>
        <div className='grid'>
          <p className='italic mx-2 font-semibold'>Password:</p>
          <input placeholder='Enter Password' className='bg-gray-200 px-3 py-1'></input>
        </div>
        <Link className="flex justify-center items-center text-center bg-gray-400 px-2 my-1 py-1 w-full" to="/Profile"> Create Account
        </Link>

      </form>
    </div>
  )
}

export default Registration
