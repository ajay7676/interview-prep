<<<<<<< HEAD
import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const About = () => {
  const  {LoggedInUser} = useContext(UserContext)
  return (
   <>
      <div>About</div>
      <h5>{LoggedInUser}</h5>
   </>
=======
import User from "./User"
import UserClass from "./UserClass"

const About = () =>{
  return(
    <div>
      <h1>About</h1>
     {/* <User name="Ajay function" location="Maghya" /> */}
     <UserClass name="Ajay Class" location="Noida" />
    </div>
>>>>>>> 750152c37cbeea4b853e904481a962330660630f
  )
}
export default About