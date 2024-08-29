import React, { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(42);

    const incrementTwice = () => {
        // Enqueue two updates
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className='p-4 m-4'>
            <p>Current count: {count}</p>
            <button onClick={incrementTwice} className='btn btn-primary'>Increment Twice</button>
        </div>
    );
}

