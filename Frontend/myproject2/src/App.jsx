import { useState } from 'react'
import './App.css'
import Signup from './Components/signup'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() 
{
  return (
    <>
    <BrowserRouter>
   
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
