import React from 'react'
import AppContextProvider from './context/AppContext'
import Child from './Child'

const App = () => {

    return (
        <AppContextProvider>
            <Child />
        </AppContextProvider>
    )
}

export default App