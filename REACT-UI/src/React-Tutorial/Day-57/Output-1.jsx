import React, { useEffect, useState } from 'react'

const OutputOne = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Component Rendered Successfully")
    }, [])
    return (
        <div className='m-4'>
            <h1>Count : {count}</h1>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='btn btn-warning ms-1'>Decrement</button>
            <div><button></button></div>
        </div>
    )
}

export default OutputOne