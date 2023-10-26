import React from 'react'
import { Navigate, Outlet } from 'react-router-dom' 

// This component is used to protect the various pages. Once no token is
// Generated it will refuse it to connect and render the pages.

const PrivateRoutes = () => {
    // Example: Check if the user has a valid JWT token
 const authToken = localStorage.getItem('token');

  return (
    authToken? <Outlet/>: <Navigate to='/' />
  )
}

export default PrivateRoutes
