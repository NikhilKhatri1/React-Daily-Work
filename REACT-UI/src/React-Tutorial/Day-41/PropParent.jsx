import React, { useState } from 'react'
import PropChild from './PropChild'

const PropParent = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    <div className='m-2'>
      <h1>PropParent</h1>
      <PropChild value={count} onClickIncrement={handleCount} />
    </div>
  )
}

export default PropParent