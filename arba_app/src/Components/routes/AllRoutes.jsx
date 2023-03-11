import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../account/Login'
import Signup from '../account/Signup'
import AllProducts from '../AllProducts/AllProducts'
import Cart from '../Cart/Cart'
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
    <Route path='/products' element={<AllProducts />}/>
    <Route path='/cart' element={<Cart />}/>




   </Routes>
  )
}

export default AllRoutes