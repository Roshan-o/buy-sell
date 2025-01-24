import React, { useState } from 'react'
// import moduleName from './pages/Home/Home'
import Home from './pages/Home/Home';
import Cart from "./pages/Cart/Cart";
import History from "./pages/OrderHis/History";
import Profile from './pages/Profile/Profile';
import Registration from './pages/Registration/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders/Orders';
import Login from './pages/Registration/Login';
import { MyContext } from './MyContext';


function App() {
  const [info,change]=useState({Firstname:"Roshan",Lastname:"Kalluri",age:19,Emailadress:"roshanlalkalluri@gmail.com",Phone:"8328525XXX"})
  return (
    <>
    <MyContext.Provider value={{info,change}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Profile' element={<Profile/>}/>
        {/* <Route path='/Profile' element={<Profile/>}/> */}
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/History' element={<History/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </MyContext.Provider>
    </>
  );
}

export default App
