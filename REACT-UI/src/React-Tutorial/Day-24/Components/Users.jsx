import React from 'react'
import { Outlet } from 'react-router-dom'
export const Users = () => {
    return (
        <div>
            <h1>Users 1</h1>
            <h1>Users 2</h1>
            <h1>Users 3</h1>
            <Outlet />
        </div>
    )
}
