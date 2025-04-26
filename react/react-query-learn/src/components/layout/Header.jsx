import React from 'react'
import { NavLink } from 'react-router'
import  './style.css'

const Header = () => {
  return (
    <header className='header-con'>
        <div>
            <NavLink to="#" >Ajay Chauhan</NavLink>
        </div>
        <ul>
            <li>
                <NavLink to="#">Home</NavLink>
                <NavLink to="#">Fetch Old</NavLink>
                <NavLink to="#">Fetch RQ</NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Header