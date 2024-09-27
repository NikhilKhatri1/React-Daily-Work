import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Products } from './Components/Products'
import { Featured } from './Components/Featured'
import { New } from './Components/New'
import { Navbar } from './Components/Navbar'
import { OrderSummary } from './Components/OrderSummary'
import { Users } from './Components/Users'
import { Admin } from './Components/Admin'
import UserDetail from './Components/UserDetail'
import { Profile } from './Profile'
import { LoginPage } from './LoginPage'

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
                        <Route index element={<Featured />} />
                        <Route path='Featured' element={<Featured />} />
                        <Route path='New' element={<New />} />
                    </Route>
                    {/* We can nest Dynamic Route  */}
                    <Route path='Users' element={<Users />} >
                        <Route path=':userId' element={<UserDetail />} />
                        <Route path='admin' element={<Admin />} />
                    </Route>
                    <Route path='Profile' element={<Profile />} />
                    <Route path='Login' element={<LoginPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default NestedRouteApp