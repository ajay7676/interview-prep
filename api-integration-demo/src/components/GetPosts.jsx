import React, { useEffect, useState } from 'react'
import axios from 'axios'
const GetPosts = () => {
const[posts , setPosts] = useState([]);

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setPosts(res.data)).catch(err => console.log(err))
    
  }, [])
  
  return (
   <>
      <h1>API Integration </h1>
      {
        posts &&  posts.map( post => (
          <div key={post.id} style={{ border: '1px solid gray', margin: 10, padding: 10 }}>
            <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>
        ))
      }
   </>
  )
}

export default GetPosts