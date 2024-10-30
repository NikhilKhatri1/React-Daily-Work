// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())} className='px-3 py-2 text-white border border-gray-700 rounded bg-sky-600 me-4'>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())} className='px-3 py-2 text-white border border-gray-700 rounded bg-rose-600 ms-4'>
                Decrement
            </button>
        </div>
    );
};

export default Counter;
