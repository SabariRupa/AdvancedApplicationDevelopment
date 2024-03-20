import React, { lazy, Suspense } from 'react';
import './App.css'
import Signup from './Components/signup'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UserDashb from './Components/userDashb'
import NewLoanApp from './Components/NewLoanApp'
import Documents from './Components/Documents'
import Profile from './Components/Profile'
import LoanCalculator from './Components/LoanCalculator'
import LoadingIndicator from './Components/LoadindIndicator'
import LoanExplorer from './Components/LoanExplorer';
import AdminDash from './Components/AdminDash';
import BanksPage from './Components/BanksPage';
import SchemesPage from './Components/SchemesPage';
import UsersPage from './Components/UserPage';
const Loans = React.lazy(() => import('./Components/Loans'));

function App()  
{
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<LoadingIndicator />}>
   <Navbar/>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/newloanapp' element={<NewLoanApp/>}/>
    <Route path='/userdashb' element={<UserDashb/>}/>
    <Route path='/loancalculator' element={<LoanCalculator/>}/>
    <Route path='/loanExplorer' element={<LoanExplorer/>}/>
    <Route path='/banks' element={<BanksPage/>}/>
    <Route path='/schemes' element={<SchemesPage/>}/>
    <Route path='/users' element={<UsersPage/>}/>
  
    <Route path='/documents' element={<Documents/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/loans' element={<Loans/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/adminDash' element={<AdminDash/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    
    </>
  )
}

export default App
