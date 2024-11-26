import React, { useState } from 'react'

const UseStateCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {

        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);

    }
    return (
        <div className='m-4'>
            <h1>Counter Function</h1>
            <h2>counting = {count}</h2>
            <button className='btn btn-success' onClick={increment}>Increment by 4</button>
        </div>
    )
}

export default UseStateCounter