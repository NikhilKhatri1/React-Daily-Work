import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavLinkNavbar = () => {
    return (
        <div className='mx-3 border border-3 w-50 border-black my-3'>
            <h1>Link In Route</h1>
            <NavLink
                to="/"
                className={({ isActive }) => {
                    console.log('Home isActive ', isActive);
                    return `me-3 text-decoration-none ${isActive ? 'text-danger' : 'text-primary'}`;
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => {
                    console.log('About isActive ', isActive);
                    return `me-3 text-decoration-none ${isActive ? 'text-danger' : 'text-primary'}`;
                }}
            >
                About
            </NavLink>
        </div>
    );
}
