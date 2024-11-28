import React, { useReducer } from 'react'

const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return { count: state.count + 1 }
        case 'Decrement':
            return { count: state.count - 1 }
        case 'Reset':
            return { count: initialState.count }
        default:
            return state;
    }
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button className='btn btn-primary' onClick={() => dispatch({ type: "Increment" })}>Increment</button>
            <button className='mx-2 btn btn-primary' onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
            <button className='btn btn-primary' onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
        </div>
    )
}

export default UseReducerHook