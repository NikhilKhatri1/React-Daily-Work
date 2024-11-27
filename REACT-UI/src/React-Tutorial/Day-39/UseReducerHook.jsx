import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
    }
}

const UseReducerHook = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='flex flex-col items-center justify-center h-[100vh]'>
            <button className='btn btn-primary' onClick={() => dispatch('Increment')}>Increment</button>
            <h1>Count: {count}</h1>
            <button className='btn btn-primary' onClick={() => dispatch('Decrement')}>Decrement</button>
        </div>
    )
}

export default UseReducerHook