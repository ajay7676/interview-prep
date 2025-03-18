import User from "./User"
import UserClass from "./UserClass"

const About = () =>{
  return(
    <div>
      <h1>About</h1>
     {/* <User name="Ajay function" location="Maghya" /> */}
     <UserClass name="Ajay Class" location="Noida" />
    </div>
  )
}
export default About