import React from 'react'

const TODOHero = ({todos_completed="4",total_todos="10"}) => {
  return (
    <section className='todohero_section'>
    <div>
      <p>Task Done</p>
      <p>Keep it up</p>
    </div>
    <div>
      {todos_completed}/{total_todos}
    </div>
  </section>
  )
}

export default TODOHero