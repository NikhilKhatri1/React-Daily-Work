import React, { useEffect, useRef, useState } from 'react'

const Practise = () => {
    const [value, setValue] = useState(0);
    // const [count, setCount] = useState(0);
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1
        // setCount(count + 1)
    })
    return (
        <div className='text-center'>
            <h1>UseRef</h1>
            <button className='btn btn-warning' onClick={() => setValue(prev => prev - 1)}>-</button>
            <h3>{value}</h3>
            <button className='btn btn-warning' onClick={() => setValue(prev => prev + 1)}>+</button>
            {/* <h3>Count using UseState : {count}</h3> */}
            <h1>Count redering using useRef()</h1>
            <h3>Render Counter: {count.current}</h3>

        </div>
    )
}

export default Practise