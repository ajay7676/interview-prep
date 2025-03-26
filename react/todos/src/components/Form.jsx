import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

const Form = () => {
    const [value, setValue] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        setValue(e.target.value)
       
    }
    console.log(value)
  return (
    <form className="form" onSubmit={handleSubmit}>
    <label htmlFor="todo">
      <input
        type="text"
        name="todo"
        id="todo"
        value={value}
        placeholder="Write your next task"
      />
    </label>
    <button>
      <span className="visually-hidden">Submit</span>
       <FaPlus />
    </button>
  </form>
  )
}

export default Form