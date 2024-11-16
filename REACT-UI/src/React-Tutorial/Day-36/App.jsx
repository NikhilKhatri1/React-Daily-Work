import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='m-4'>
            <button className='btn btn-primary' onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div >
    )
}

export default App