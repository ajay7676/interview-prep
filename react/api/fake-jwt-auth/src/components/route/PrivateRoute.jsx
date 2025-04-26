import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header';

const PrivateRoute = () => {
    const usertoken = localStorage.getItem("token");


    return usertoken ?
    <>
       <Header />
       <Outlet />
    </>
    : <Navigate to="/login" replace  />

 
}

export default PrivateRoute