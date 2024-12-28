import React, { useState } from 'react'

const ImprovedCount = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    }
    return (
        <div className='m-4'>
            <h1>ImprovedCount</h1>
            <p>Count : {count}</p>
            <button onClick={handleIncrement} className='btn btn-primary'>inc++</button>
        </div>
    )
}

export default ImprovedCount