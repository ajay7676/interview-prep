import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const About = () => {
  const  {LoggedInUser} = useContext(UserContext)
  return (
   <>
      <div>About</div>
      <h5>{LoggedInUser}</h5>
   </>
  )
}

export default About