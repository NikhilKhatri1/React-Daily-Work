import React, { Children, createContext } from 'react';

// Create the context
export const userContext = createContext();

const Props = (props) => {
    const person = {
        name: 'john'
    }

    return (
        <div>
            {/* Provide the context value */}
            <userContext.Provider value={person}>
                {/* Render children */}
                {props.children}
            </userContext.Provider>
        </div>
    )
}

export default Props;
