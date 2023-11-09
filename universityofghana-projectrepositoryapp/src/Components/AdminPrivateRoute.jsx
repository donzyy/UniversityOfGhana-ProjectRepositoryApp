import jwtDecode from 'jwt-decode';
import React from 'react'
import Role from './Role';
import { Navigate, Outlet } from 'react-router-dom';

const AdminPrivateRoute = () => {
    const token = localStorage.getItem('token');

    const checkRoles = (token) => {

        if (!token) return false;

        const decodedToken = token? jwtDecode(token): null;

        console.log('decoded Token', decodedToken)

        const currentTime = Date.now()/1000;
        const isTokenExpired = decodedToken.exp < currentTime;

        if (isTokenExpired) {
            localStorage.removeItem('token');
            return false;
        }

        const userRole = decodedToken && decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        console.log('userRole', userRole);

        const hasPermission = userRole === Role.ADMIN

        return hasPermission
    }

    const hasPermission = checkRoles(token);

  return (
    hasPermission? <Outlet />: <Navigate to='/' />
  )
}

export default AdminPrivateRoute
