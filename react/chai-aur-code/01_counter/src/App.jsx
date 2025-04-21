import { useState } from 'react'

import './App.css'

function App() {
 const [count, setcount] = useState(15)

  const addValue = () =>{
      // setcount(count+1)
      // setcount(count+1)
      // setcount(count+1)
      // setcount(count+1)
      // setcount(count+1) 15
       setcount(prev => prev+1);
       setcount(prev => prev+1);
       setcount(prev => prev+1);
       setcount(prev => prev+1); // 19
    
    }

  const decValue = () =>{
      setcount(count - 1)
    
  }

  return (
    <>
        <h1>Counter Number : {count}</h1>
        <button onClick={addValue}>AddValue Counter :{count} </button>
        <button onClick={decValue}>Decerement Counter : {count} </button>
        <p>Footer : {count}</p>
        
    </>
  )
}

export default App
