import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../account/Login'
import Signup from '../account/Signup'
import Home from '../Home/Home'
import RequiredAuth from '../RequiredAuth'

function AllRoutes() {
  return (
   <Routes>

    <Route path='/' element={
    <RequiredAuth>
        <Home />
    </RequiredAuth>
  }
    />
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>


   </Routes>
  )
}

export default AllRoutes