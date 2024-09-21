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

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    // When Using Same Functionality in different component.. we can use another reducer
    // tht will provide similar functionality and prevent duplicating the function

    // we will change the stateName and DispatchName
    const [countTwo, dispatch2] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Count - {count}</h1>
            <button className='btn btn-primary me-2' onClick={() => dispatch("Increment")}>Increment</button>
            <button className='btn btn-danger me-2' onClick={() => dispatch("Decrement")}>Decrement</button>
            <button className='btn btn-warning me-2' onClick={() => dispatch("Reset")}>Reset</button>

            {/* Both Provide similar Functionality and different to eachother
             This is used For Multiple component having same functionality but use is different 
             code reusablity */}
            <h1>Count - {countTwo}</h1>
            <button className='btn btn-primary me-2' onClick={() => dispatch2("Increment")}>Increment</button>
            <button className='btn btn-danger me-2' onClick={() => dispatch2("Decrement")}>Decrement</button>
            <button className='btn btn-warning me-2' onClick={() => dispatch2("Reset")}>Reset</button>
        </div>
    )
}

export default CounterThree