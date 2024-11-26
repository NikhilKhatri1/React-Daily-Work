import React, { createContext } from 'react'


export const AppContext = createContext();

const AppContextProvider = (props) => {
    const phone = '+1233457589032';
    const name = "Alice";

    return (
        <AppContext.Provider value={{ phone,name }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider