import React, { createContext, useState } from 'react'


export const UserContext = createContext();

const AppContextProvider = (props) => {
    const [person, setPerson] = useState("Alice")
    return (
        <UserContext.Provider value={{ person, setPerson }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default AppContextProvider