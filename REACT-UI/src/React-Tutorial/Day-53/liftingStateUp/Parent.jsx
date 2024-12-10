import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }
    return (
        <div className='p-2'>
            <h1>Parent component</h1>
            <h1>{count}</h1>
            <Child value={count} onIncrement={handleIncrement} />
        </div>
    )
}

export default Parent