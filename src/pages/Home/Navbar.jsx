import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

function Navbar() {
  return (
    
    <nav className=' py-2 flex justify-center gap-x-10'>
        <Link to='/Profile' className='rounded-2xl text-sm px-2 h-10 hover:border-1 content-center'>Profile</Link>
        <Link to='/' className='rounded-2xl text-sm px-2 h-10 hover:border-1 content-center'>Home</Link>
        <Link to='/Cart' className='rounded-2xl text-sm px-2 h-10 hover:border-1 content-center'>Cart</Link>
        <input type='text' className='bg-gray-300 h-10 px-1 rounded'></input>
        <button className='bg-gray-300 rounded-2xl text-sm px-2 h-10 hover:border-1 content-center'>Search</button>
        <Link to='/Orders' className='rounded-2xl text-sm px-2 h-10 hover:border-1 content-center'>Orders</Link>
        <Link to='/History' className='rounded-2xl text-sm px-2 h-10 hover:border-1 content-center'>History</Link>
        <button className=' hover:bg-red-500 rounded-2xl text-sm h-8 px-2 hover:drop-shadow-md content-center'>Logout</button>

    </nav>
    
  )
}
export default Navbar
