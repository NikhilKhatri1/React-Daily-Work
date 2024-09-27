import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const navigate = useNavigate()
    return (
        <div className='w-25'>
            <h1>Profile Page</h1>
            <input type="text" className='form-control' />
            <button className='btn btn-warning w-100' onClick={()=>navigate('LoginPage')}>Login</button>
        </div>
    )
}
