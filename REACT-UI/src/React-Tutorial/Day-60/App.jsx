import React from 'react'
import Header from './Components/Header'
import AppContext from './Context/AppContext'

const App = () => {

    return (
        <AppContext>
            <Header />
        </AppContext>
    )
}

export default App