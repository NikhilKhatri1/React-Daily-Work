import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'Reset':
            return initialState;
        default:
            return state;
    }
}


const Count = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Count : {count} </h1>
            <button className='btn btn-primary ' onClick={() => dispatch('Increment')}>Increment</button>
            <button className='mx-2 btn btn-primary' onClick={() => dispatch('Decrement')}>Decrement</button>
            <button className='btn btn-primary ' onClick={() => dispatch('Reset')}>Reset</button>
        </div>
    )
}

export default Count