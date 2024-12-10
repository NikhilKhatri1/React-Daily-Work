import React, { createContext, useState } from 'react'

export const ContextApi = createContext();

const Provider = ({ children }) => {
    const [data, setData] = useState('Data');
    return (
        <ContextApi.Provider value={{ data, setData }}>
            {children}
        </ContextApi.Provider>
    )
}

export default Provider