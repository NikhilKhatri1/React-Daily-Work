import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [count, setCount] = useState(0);

    // useRef does not cause re-render if you use UseState.
    const value = useRef(0);

    useEffect(() => {
        console.log('useEffect triggered');
        value.current = value.current + 1;
    });

    console.log('Component render triggered'); // This will log every time the component re-renders

    return (
        <div>
            <h1>UseRefHook</h1>
            <h2>Count: {count}</h2>
            <button className='btn btn-danger' onClick={() => setCount(count + 1)}>increment++</button>
            <button className='btn btn-danger ms-2' onClick={() => setCount(count - 1)}>decrement--</button>
            <h2>Render count: {value.current}</h2> {/* Display render count */}
        </div>
    )
}

export default UseRefHook;
