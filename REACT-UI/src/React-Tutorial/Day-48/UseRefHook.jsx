import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [count, setCount] = useState(0);

    // useRef does not cause re-render if you use UseState.

    // it will re-render again and value will increase[infinite] in useEffect().
    // useRef is used when you dont want to cause render in component
    const value = useRef(0);
    useEffect(() => {
        value.current = value.current + 1
    })
    return (
        <div>
            <h1>UseRefHook</h1>
            <h2>Count: {count}</h2>
            <button className='btn btn-danger' onClick={() => setCount(count + 1)}>increment++</button>
            <button className='btn btn-danger ms-2' onClick={() => setCount(count - 1)}>decrement--</button>
            <h2>Render : {value.current}</h2>
        </div>
    )
}

export default UseRefHook