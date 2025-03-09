import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between '>
        <h1 className='text-white text-2xl'>Hello <br /> <span className='text-3xl'> Ajay </span></h1>
        <button className='bg-red-600 py-3 px-5 border-rounded text-white'>Log Out</button>
    </div>
  )
}

export default Header