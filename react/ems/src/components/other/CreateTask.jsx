import React from 'react'

const CreateTask = () => {
  return (
    <>
    <div className='admin-dashboard-con'>
        <form action="">
          <h3>Task Title</h3>
          <input type='text' placeholder='Make a UI design' />
          <h3>Description</h3>
          <textarea name="" id=""></textarea>
          <h3>Data & Time</h3>
          <input type='date' />
          <h3>Assign To</h3>
          <input type='text' placeholder='Employee name' />
          <h3>Category</h3>
          <input type='text' placeholder='Design , dev, etc' />
          <button className='create-btn'>Create Task</button>
        </form>
      </div>
    </>
  )
}

export default CreateTask