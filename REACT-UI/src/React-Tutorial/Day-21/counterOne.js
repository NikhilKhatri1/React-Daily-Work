import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        case "Reset":
            return initialState;
        default:
            return state;
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <h1>Count - {count}</h1>
            <button className='btn btn-primary me-2' onClick={() => dispatch("Increment")}>Increment</button>
            <button className='btn btn-danger me-2' onClick={() => dispatch("Decrement")}>Decrement</button>
            <button className='btn btn-warning me-2' onClick={() => dispatch("Reset")}>Reset</button>
        </div>
    )
}

export default CounterOne