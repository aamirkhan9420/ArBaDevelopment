import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../account/Login'
import Signup from '../account/Signup'

function AllRoutes() {
  return (
   <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>

   </Routes>
  )
}

export default AllRoutes