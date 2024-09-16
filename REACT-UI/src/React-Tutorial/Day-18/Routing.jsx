
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <header className='bg-dark text-white p-2 d-flex justify-content-between'>
                    <div className='navBrand fw-bold fs-3'>NavBrand</div>
                    <div className='fs-4'>
                        <Link to="/" className='link-light text-decoration-none mx-2'>Home</Link>
                        <Link to="/" className='link-light text-decoration-none mx-2'>About</Link>
                        <Link to="/" className='link-light text-decoration-none mx-2'>Journey</Link>
                        <Link to="/" className='link-light text-decoration-none mx-2'>Content</Link>
                        <Link to="/" className='link-light text-decoration-none mx-2'>Login</Link>
                    </div>
                    <div>
                        <span className='bi bi-person-fill fs-4 mx-2'></span>
                        <span className='bi bi-heart-fill fs-5 mx-2'></span>
                        <span className='bi bi-cart4 fs-5 mx-2'></span>
                    </div>
                </header>
                <section className='mt-4'>
                    <Routes>
                        <Route path='/' element={<div><h1>Welcome to Online Shopping</h1><p>Mens|Kids|Women Fashion</p></div>}></Route>
                        <Route path='men' element={<div></div>}></Route>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}