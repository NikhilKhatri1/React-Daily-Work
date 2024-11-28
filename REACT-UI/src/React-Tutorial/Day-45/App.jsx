import React from 'react'
import Header from './components/Header'
import UserContact from './components/UserContact'
import Footer from './components/Footer'
import AppContextProvider from './Context/AppContext.jsx'

const App = () => {
    return (
        <div className='m-4'>
            <AppContextProvider>
                <Header />
                <UserContact />
                <Footer />
            </AppContextProvider>
        </div>
    )
}

export default App