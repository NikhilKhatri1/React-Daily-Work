import React from 'react'
import { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState
        default:
            return state;
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count : {count}</h1>
            <button className='btn btn-primary me-2' onClick={() => dispatch('increment')}>Increment</button>
            <button className='btn btn-danger me-2' onClick={() => dispatch('decrement')}>Decrement</button>
            <button className='btn btn-dark' onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducer