import React, { useEffect, useState } from "react";
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () =>{
    const payload = {
       email : email,
       password: password
    }
     axios.post(`https://api.escuelajs.co/api/v1/auth/login` , payload)
       .then((res) => {
        localStorage.setItem("token" , JSON.stringify(res.data.access_token))
        console.log("Login SuccessFul" ,res)
       })
       .catch((err) =>{
          console.log("Login Failed" , err)
       })
  }
  
  return (
    <>
      <div className="bg-sky-200 w-full h-screen text-center p-5">
        <p>Login Page</p>
        <div className="mt-7">
          <p>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} className="border rounded-md shadow-md" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}  className="border rounded-md shadow-md" />
        </div>
        <div>
          <button className="bg-blue-600 px-4 py-2 rounded-md text-white  mt-5" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
