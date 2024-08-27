import React, { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(42);

    const incrementTwice = () => {
        // Enqueue two updates
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={incrementTwice}>Increment Twice</button>
        </div>
    );
}

