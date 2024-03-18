import { useState } from 'react'
import './App.css'
import Signup from './Components/signup'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UserDashb from './Components/userDashb'
import NewLoanApp from './Components/NewLoanApp'

function App() 
{
  return (
    <>
    <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/newloanapp' element={<NewLoanApp/>}/>
    <Route path='/userdashb' element={<UserDashb/>}/>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
