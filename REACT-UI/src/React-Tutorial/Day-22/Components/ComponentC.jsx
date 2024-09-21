import React from 'react'
import ComponentE from './ComponentE'


function ComponentC() {
  return (
    <div className='border border-3 p-2 m-2'>
      <h1>Component C</h1>

      <ComponentE />
    </div>
  )
}

export default ComponentC