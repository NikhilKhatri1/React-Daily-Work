import React, { useContext } from 'react';

import { CountContext } from '../App';

function ComponentD() {
  const countContext = useContext(CountContext)
  return (
    <div>
      <h1>Component D</h1>
      <button className='btn btn-primary me-2' onClick={() => countContext.countDispatch('Increment')}>Increment</button>
      <button className='btn btn-primary me-2' onClick={() => countContext.countDispatch('Decrement')}>Decrement</button>
      <button className='btn btn-primary me-2' onClick={() => countContext.countDispatch('Reset')}>Reset</button>
    </div>
  )
}

export default ComponentD