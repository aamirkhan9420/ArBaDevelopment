import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../account/Login'
import Profile from '../account/Profile'
import Signup from '../account/Signup'
import AllProducts from '../AllProducts/AllProducts'
import Cart from '../Cart/Cart'
import CodingChallenge from '../CodingChallenge/CodingChallenge'
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
    <Route path='/profile' element={<Profile />}/>
    <Route path='/codingchallenge' element={<CodingChallenge />}/>

    





   </Routes>
  )
}

export default AllRoutes