import React from 'react'
import ContextProvider from './AppContext'
import App1 from './App1'

const App = () => {
    return (
        <ContextProvider>
            <App1 />
        </ContextProvider>
    )
}

export default App