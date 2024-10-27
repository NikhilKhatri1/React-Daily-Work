import React, { useReducer, useState } from 'react';

import { reducer, initialState } from './Count';

const CounterReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleAdd = () => {
        const amount = Number(inputValue);
        if (!isNaN(amount)) {
            dispatch({ type: 'incrementbyAmount', payload: amount });
        }
    };

    const handleSubtract = () => {
        const amount = Number(inputValue);
        if (!isNaN(amount)) {
            dispatch({ type: 'decrementbyAmount', payload: amount });
        }
    };

    return (
        <div className='m-2'>
            <h1>Count: {count}</h1>
            <button className='btn btn-danger me-2' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button className='btn btn-success' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

            <div className='flex flex-col mt-5'>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='border border-gray-950 mb-3 w-[200px]'
                />
                <button className='btn btn-outline-danger w-25 mb-3' onClick={handleAdd}>Add</button>
                <button className='btn btn-outline-info w-25' onClick={handleSubtract}>Subtract</button>
            </div>
        </div>
    );
};

export default CounterReducer;
