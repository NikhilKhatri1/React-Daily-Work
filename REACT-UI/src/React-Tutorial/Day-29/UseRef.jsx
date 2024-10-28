import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
        countRef.current = count; // Update the ref whenever count changes
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className='m-2'>
            <h1>Use Ref</h1>
            <button className='px-4 py-2 text-white bg-yellow-600 rounded' onClick={increment}>Increment</button>
            <h2 className='mx-12 my-2'>{countRef.current}</h2>
            <button className='px-4 py-2 text-white bg-yellow-600 rounded' onClick={decrement}>Decrement</button>
        </div>
    );
}

export default UseRef;
