import React from 'react'
import { createContext } from 'react'
import ComponentA from './ComponentA';

export const userContext = createContext();

const App = () => {
    const user = {
        name: "John",
        age: 22

    }

    return (
        <userContext.Provider value={user}>
            <ComponentA/>
        </userContext.Provider>
    )
}

export default App