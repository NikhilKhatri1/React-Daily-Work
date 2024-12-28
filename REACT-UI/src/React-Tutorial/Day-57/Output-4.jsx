// Question 3

// How would you implement a stateful component that displays a button and a counter ?
//  The counter should increment by 1 each time the button is clicked.
// Write the code for this component.

import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>Count : {count}</p>
            <button className='btn btn-primary' onClick={handleIncrement}>inc++</button>
        </div>
    )
}

export default Counter