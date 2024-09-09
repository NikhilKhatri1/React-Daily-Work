import React, { createContext, useState, useContext } from 'react';

// Create the context
const CountContext = createContext();

// Custom hook to use the CountContext
export const useCount = () => useContext(CountContext);

// Provider component
export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);

    return (
        <CountContext.Provider value={{ count, increment }}>
            {children}
        </CountContext.Provider>
    );
};
