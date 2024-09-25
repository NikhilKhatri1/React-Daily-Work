import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className='mx-3 border border-3 w-50 border-black my-3'>
            <h1>Link In Route </h1>
            <Link to="/" className='me-3 text-decoration-none'>Home</Link>
            <Link to="about" className='me-3 text-decoration-none'>About</Link>
            <Link to="Products" className='me-3 text-decoration-none'>Products</Link>
        </div>
    )
}
