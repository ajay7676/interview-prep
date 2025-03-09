import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 flex justify-between  gap-5 screen'>
        <div className='py-6 px-9 rounded-xl w-[45%] bg-red-400'>
            <h2 className='text-2Xl'>0</h2>
            <h3 className='text-Xl font-midum'>New Task</h3>
        </div>
        <div className='py-6 px-9 rounded-xl w-[45%] bg-blue-400'>
            <h2 className='text-2Xl'>0</h2>
            <h3 className='text-Xl font-midum'>New Task</h3>
        </div>
        <div className='py-6 px-9 rounded-xl w-[45%] bg-green-400'>
            <h2 className='text-2Xl'>0</h2>
            <h3 className='text-Xl font-midum'>New Task</h3>
        </div>
        <div className='py-6 px-9 rounded-xl w-[45%] bg-yellow-400'>
            <h2 className='text-2Xl'>0</h2>
            <h3 className='text-Xl font-midum'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber