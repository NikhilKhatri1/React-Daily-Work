import React from 'react'
import { createContext } from 'react'

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = '+1 23456677887';
    const name = 'John'
    return (
        <AppContext.Provider value={{ phone, name }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider