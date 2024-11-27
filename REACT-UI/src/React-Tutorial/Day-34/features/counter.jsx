import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counter/counterSlice';

const Counter = () => {
    //Read the data from Store
    const count = useSelector((state) => state.counter.value)
    // changing the data by sending Action to the store
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Count: {count}</h1>
            <button className='px-4 py-2 border rounded bg-sky-300 me-2' onClick={() => dispatch(increment())}>+</button>
            <button className='px-4 py-2 border rounded bg-sky-300' onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;