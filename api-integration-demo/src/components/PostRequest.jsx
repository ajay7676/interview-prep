import axios from "axios";
import React, { useState } from "react";

const PostRequest = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts' , {
        title,
        body,
        userId: 1,
    })
    .then(res => {
        console.log(res.data);
        alert("Post Created")
    }).catch( err  => {
         console.log(err)
    })
      
  }
  return (
    <>
      <h2>📝 Add Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">Add Post</button>
      </form>
      <p>{( title !== "" && body !== "")  ? <span>{title} && {body}</span> : ""}</p>
    </>
  );
};

export default PostRequest;
