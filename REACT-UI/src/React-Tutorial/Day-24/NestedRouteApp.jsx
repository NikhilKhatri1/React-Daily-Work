import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Products } from './Components/Products'
import { Featured } from './Components/Featured'
import { New } from './Components/New'
import { Navbar } from './Components/Navbar'
import { OrderSummary } from './Components/OrderSummary'

function NestedRouteApp() {
    return (
        <div className='border border-3 border-black w-50 m-2 p-5 fw-bold text-center'>
            <h1>NestedRouteApp</h1>

            <BrowserRouter>
                <div>
                    <p>Link Navbar</p>
                    <Navbar />
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='Order-summary' element={<OrderSummary />} />
                    <Route path='Products' element={<Products />}>
                        <Route path='Featured' element={<Featured />} />
                        <Route path='New' element={<New />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default NestedRouteApp