import React,{ useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) =>{
    e.preventDefault();
   console.log("Email is : " , email)
   console.log("Password is : " , password)
   setEmail('');
   setPassword('');

  }
  return (
    <>
     <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-red-600 px-5 py-5">
            <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                 onChange={(e)=>{
                   setEmail(e.target.value)
                 }}
                required className='my-5 border-1 border-white py-3 px-5 text-gray-400 rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your Email' />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                className='my-5 border-1 border-white py-3 px-5 rounded-full text-gray-400 placeholder:text-gray-400'  type='password' placeholder='Enter your Password'/>
                <button className='my-5 bg-green-500 text-white border-2 border-green-2 py-3 px-8 rounded-full' >Login</button>
            </form>
        </div>
     </div>
    </>
  )
}

export default Login