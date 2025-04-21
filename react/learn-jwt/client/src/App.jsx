import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setformData] = useState({})
  const handleChange = (e) =>{
    setformData({...formData, [e.target.name]: e.target.value});
  }
  const handleLogin = () =>{
    // Perform the login request
    fetch('http://localhost:3000/login' , {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      if(result.success === true){
        const token = result.token;
        // put the loken in local storage
        localStorage.setItem("learntoken" , token)
      }
      else{
        return "Author is not authorized"
      }
    }
      
    )
    .catch((err) => console.log("User is not Authorized " , err))

  }
   const handleAccessAccounts = () =>{
       console.log("All button was clicked")
   }
  return (
    <>
      <div className='div'>
        <h1>Login Form</h1>
        <div>
          <label>Username:</label>
          <input type='text' name='username' value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type='text' name='password' value={formData.password} onChange={handleChange} />
        </div>
        <div>
        <button onClick={handleAccessAccounts}>Al Accounts</button>
           <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  )
}

export default App
