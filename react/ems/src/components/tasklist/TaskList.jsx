import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='mt-5 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%]  rounded-xl py-5'>
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-4">
        <div className='flex  justify-between items-center'>
            <h3 className="bg-red-600 px-3 text-sm py-1 ronded">High</h3>
            <h4 className='text-sm'>06 Mar 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl  font-semibold'>Make a youtube video.</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a, consequatur nihil atque beatae voluptates.</p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-4">
        <div className='flex  justify-between items-center'>
            <h3 className="bg-red-600 px-3 text-sm py-1 ronded">High</h3>
            <h4 className='text-sm'>06 Mar 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl  font-semibold'>Make a youtube video.</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a, consequatur nihil atque beatae voluptates.</p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-4">
        <div className='flex  justify-between items-center'>
            <h3 className="bg-red-600 px-3 text-sm py-1 ronded">High</h3>
            <h4 className='text-sm'>06 Mar 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl  font-semibold'>Make a youtube video.</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a, consequatur nihil atque beatae voluptates.</p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-4">
        <div className='flex  justify-between items-center'>
            <h3 className="bg-red-600 px-3 text-sm py-1 ronded">High</h3>
            <h4 className='text-sm'>06 Mar 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl  font-semibold'>Make a youtube video.</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a, consequatur nihil atque beatae voluptates.</p>
      </div>
    </div>
  )
}

export default TaskList