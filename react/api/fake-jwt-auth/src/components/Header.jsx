import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const naigate = useNavigate();
    const getToken = JSON.parse(localStorage.getItem("token"))
    const handleLogout = (e) => {
        e.preventDefault();
       localStorage.removeItem("token")
       //  setFormData()
       naigate("/")
   }  
  return (
   <div className='w-full bg-[#eaeaea]'>
       <div className='flex items-center w-full max-w-2xl mx-auto'>
            <ul className='flex  items-center gap-4'>
                <li className='px-3 py-2'>
                    <Link to="/home">Home</Link>
                </li>
                <li className='px-3 py-2'>
                    <Link to="/profile">Profile</Link>
                </li>
                {
                    getToken ? 
                    <li className='px-3 py-2'>
                      <Link to="#" onClick={handleLogout}>Logout</Link>
                    </li>
                 : 
                 <li className='px-3 py-2'>
                    <Link to="/">Login</Link>
                  </li>
                }
                
            </ul>
        </div>
   </div>
  )
}

export default Header