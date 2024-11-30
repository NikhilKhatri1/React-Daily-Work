import React, { useReducer, useState } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'changeByInput':
            return state + action.payload; // Modify state by the input value
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const ComplexReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    // Handle the change button click
    const handleInputChange = () => {
        const value = parseInt(inputValue, 10); // Convert input value to an integer
        if (!isNaN(value)) {
            dispatch({ type: 'changeByInput', payload: value });
        }
    };

    return (
        <div>
            <h1>ComplexReducer</h1>
            <div className='flex flex-col items-center justify-center'>
                <h4>Count: {count}</h4>
                <div className='p-3 text-center border-2 border-zinc-900'>
                    <div>
                        <h3>Increment & decrement by 1</h3>
                    </div>
                    <button onClick={() => dispatch({ type: 'increment' })} className='btn btn-primary me-2 max-w-[150px]'>
                        Increment ++
                    </button>
                    <button onClick={() => dispatch({ type: 'decrement' })} className='btn btn-primary max-w-[150px]'>
                        Decrement --
                    </button>
                </div>
                <div className='p-3 my-2 text-center border-2 border-zinc-900'>
                    <div>
                        <h3>Increment & Decrement by Input</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <input
                            className='p-2 border-2 rounded-md border-zinc-600'
                            type='number'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={handleInputChange} className='btn btn-warning max-w-[150px] mt-2'>
                            Change Value
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplexReducer;
