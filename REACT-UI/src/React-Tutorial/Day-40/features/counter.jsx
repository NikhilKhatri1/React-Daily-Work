import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counter/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1>Count: {count}</h1>
            <div className=''>
                <button className='btn btn-primary' onClick={() => dispatch(increment())}>Increment++</button>
                <button className='btn btn-warning ms-2' onClick={() => dispatch(decrement())}>Decrement--</button>
           </div>
        </div>
    )
}

export default Counter