import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <div>
                <input type="search" placeholder='Search Products' className='form-control w-50' />
            </div>
            <nav className='my-5'>
                <Link to="Featured" className='me-2'>Featured</Link>
                <Link to="New" className='ms-2'>New</Link>
            </nav>
            <Outlet />
        </div>
    )
}
