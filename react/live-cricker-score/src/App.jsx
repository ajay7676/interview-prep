import { useState } from 'react'
import  './App.css'
import CircketScore from './components/CircketScore'
import OtpInput from './components/otp-input/OtpInput'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*  Live Cricket Score Component */}
      {/* <CircketScore /> */}
      {/* Start Otp Input Component */}
      <OtpInput />
    </>
  )
}

export default App
