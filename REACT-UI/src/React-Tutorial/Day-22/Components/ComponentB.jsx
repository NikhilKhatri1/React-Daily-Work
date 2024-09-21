import React from 'react'
import ComponentD from './ComponentD'
function ComponentB() {
  return (
    <div className='border border-3 p-2 m-2'>
      <h1>Component B</h1>

      <ComponentD />
    </div>
  )
}

export default ComponentB