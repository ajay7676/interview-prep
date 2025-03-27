import React,{useState,useEffect} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
   ( async() =>{
     const response = await axios.get('/api/products') 
     console.log(response.data)
   })()
    
  }, [])
  

  return (
    <>
      <h1>API Handling</h1>
      <h2>Number of Products are : {products.length}</h2>
    </>
  )
}

export default App
