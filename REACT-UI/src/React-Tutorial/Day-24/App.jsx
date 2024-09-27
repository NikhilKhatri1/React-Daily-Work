import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { NavLinkNavbar } from './Components/NavLink';
import { OrderSummary } from './Components/OrderSummary';
import { NoMatch } from './Components/NoMatch';



const lazyAbout = React.lazy(() => import('./Components/About.js'));

function App() {
    return (
        <div className='border border-3 border-black w-50 m-2 p-5 fw-bold text-center'>
            <BrowserRouter>
                <h1>App Component</h1>
                <div>
                    <p>Link Navbar</p>
                    <Navbar />
                </div>
                <div>
                    <p>Navlink Navbar</p>
                    <NavLinkNavbar />
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={
                        <React.Suspense fallback='Loading...'>
                            <lazyAbout />
                        </React.Suspense>
                    } />
                    <Route path='order-summary' element={<OrderSummary />} />
                    <Route path='*' element={<NoMatch />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
