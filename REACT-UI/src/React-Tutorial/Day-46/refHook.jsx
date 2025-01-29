import React, { useEffect, useRef, useState } from 'react'

const RefHook = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={(prev) => setCount(prev + 1)}>inc++</button>
            <button onClick={(prev) => setCount(prev - 1)}>dec--</button>
        </div>
    )
}

export default RefHook