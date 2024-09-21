import React, { useReducer, createContext } from 'react'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'

export const CountContext = createContext()

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

function App() {
    const [count, dispatch] = useReducer(reducer, initialState);



    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div className='w-100 border border-3 p-2 text-center'>
                <h1>Count - {count}</h1>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}

export default App