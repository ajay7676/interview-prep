import React from 'react'
import { FaCircleNotch, FaEdit, FaTrash } from "react-icons/fa";


const Item = (item) => {
  return (
    <li id={item?.id} className="todo_item">
      <button className="todo_items_left">
       <FaCircleNotch />
        <p>{item?.title}</p>
      </button>
      <div className="todo_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
          <FaEdit />
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
          <FaTrash />
        </button>
      </div>
    </li>
  )
}

export default Item