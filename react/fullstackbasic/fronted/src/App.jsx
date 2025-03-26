
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
   
  }, [])
  

  return (
    <>
      <h1>Chai & Full Stack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div className='joklist' key={joke.id}>
              <p>{joke.title}</p>
              <p>{joke.content}</p>
          </div>
        ) )
        
      }
    </>
  )
}

export default App
