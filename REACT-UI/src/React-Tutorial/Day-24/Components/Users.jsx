import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <div>
                <h1>Users 1</h1>
                <h1>Users 2</h1>
                <h1>Users 3</h1>
                <Outlet />
            </div>
            <div>
                <button className='btn btn-primary me-2' onClick={() => setSearchParams({ filter: true })}>Active User</button>
                <button className='btn btn-primary me-2' onClick={() => setSearchParams({})}>Reset User</button>
            </div>
        </div>
    )
}
