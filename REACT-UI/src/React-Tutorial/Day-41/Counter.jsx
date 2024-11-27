import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const IncrementHook = () => {
        setCount(prev => prev + 1);
    }

    // const IncrementDirectly = () => {
    //     count = count + 1
    // }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={IncrementHook} className='btn btn-primary'>Increment using hooks</button>
            {/* <button onClick={IncrementDirectly} className='btn btn-warning ms-2'>Increment Directly</button> */}
        </div>
    )
}

export default Counter