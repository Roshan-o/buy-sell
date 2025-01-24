import React, { useContext } from 'react'
import { MyContext } from '../../MyContext'
import Navbar from '../Home/Navbar'

function F(e) {
  console.log(e)
  return (
    <div>
      <p className='font-semibold mb-1'>{e.first}:</p>
      <p className=' px-2 py-1 mb-2 border-2 rounded w-full'>{e.second}</p>
    </div>
  )
}
function Profile() {
  const info=useContext(MyContext).info
  // console.log(info.Emailadress)
  
  
  return (
    <div className=' bg-gray-400 w-full h-screen'>
      <Navbar/>
      <p className='text-4xl font-bold my-3 text-center'>Your Account.</p>
      <div className='flex justify-center items-center'>
      <div className='bg-gray-200 grid py-10 px-20 rounded w-fit'>
      <F first="First name" second={info.Firstname}/>
      <F first="Last name" second={info.Lastname}/>
      <F first="Contact Number" second={info.Phone}/>
      <F first="Email address" second={info.Emailadress}/>
      <button className='bg-gray-400 px-2 py-1 mb-2 rounded w-full'>Edit</button>
      </div>
      </div>
    </div>
  )
}

// export {f}
export default Profile