import React from 'react'
import {Navigate} from 'react-router'
import Dashboard from '../Routes/Dashboard'
const UserGuard = () => {
    const isLoggedIn = false
    if (isLoggedIn) {
        return <Dashboard/>
    }else {
        return <Navigate to = "/login"/>
    }
  
}

export default UserGuard
