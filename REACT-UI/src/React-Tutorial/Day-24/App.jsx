import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Navbar } from './Components/Navbar'
import { NavLinkNavbar } from './Components/NavLink'
import { OrderSummary } from './Components/OrderSummary'
import { NoMatch } from './Components/NoMatch'

function App() {
    return (
        <div className='border border-3 border-black w-50 m-2 p-5 fw-bold text-center'>
            <BrowserRouter >
                <h1>App Component</h1>
                <div>
                    <p>Link Navbar</p>
                    <Navbar />
                </div>
                <div>
                    <p>Navlink Navbar</p>
                    <NavLinkNavbar />
                </div>
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='Order-summary' element={<OrderSummary />} />
                    <Route path='*' element={<NoMatch />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App