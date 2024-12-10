import React, { useState } from 'react'

const Child = (props) => {
    const { value, onIncrement } = props
    const [countValue, setCountValue] = useState(value);
    const handleDecrement = () => {
        setCountValue(countValue - 1);
    }
    return (
        <div className='border border-black border-1'>
            <h1>Child Component</h1>
            <h2>{countValue}</h2>
            <button className='p-2 border-red-600 border-1 rounded-xl' onClick={onIncrement}>Increment</button>
            <button className='p-2 border-green-600 border-1 rounded-xl ms-2' onClick={handleDecrement}>decrement</button>
        </div>
    )
}

export default Child