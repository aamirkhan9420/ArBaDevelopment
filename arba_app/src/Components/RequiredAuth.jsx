import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

function RequiredAuth({ children }) {
  let isAuth = useSelector((state) => {
    return state.AuthReducer.isAuth
  })
  console.log(isAuth)
  let location = useLocation()
  if (!isAuth) {

    return <Navigate to={"/login"} replace state={{ data: location.pathname }} />
  }
  return children
}

export default RequiredAuth
