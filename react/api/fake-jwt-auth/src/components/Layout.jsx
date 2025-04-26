import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../../../../react-query-learn/src/components/layout/Header'


const Layout = () => {
    const usertoken = JSON.parse(localStorage.getItem("token"));
     return usertoken !== null ? <><Header /><Outlet /></> :  < Navigate to="/login" replace />

}

export default Layout