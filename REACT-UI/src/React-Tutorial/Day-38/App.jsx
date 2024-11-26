import React from 'react'
import AppContextProvider from './context/AppContext'
import Profile from './component/Profile'
import Footer from './component/Footer'

const App = () => {
    return (
        <AppContextProvider>
            <Profile />
            <Footer />
        </AppContextProvider>
    )
}

export default App