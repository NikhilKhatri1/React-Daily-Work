import React, { createContext, useState } from 'react'

export const UserContext = createContext()
const AppContext = (props) => {
    const [person, setPerson] = useState('john')
    return (
        <UserContext.Provider value={{ person, setPerson }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default AppContext