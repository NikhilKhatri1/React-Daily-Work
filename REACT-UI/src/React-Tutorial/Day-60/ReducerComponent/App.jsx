import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return { count: state.count + 1 };
        case 'Decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{state.count}</h1>

            <button onClick={() => dispatch({ type: 'Increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'Decrement' })}>Decrement</button>
        </div>
    )
}

export default App