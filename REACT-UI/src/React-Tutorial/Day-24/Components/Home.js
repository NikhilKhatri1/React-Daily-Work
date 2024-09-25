import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='mt-3'>Home Page</div>
            <button onClick={() => navigate('order-summary')}>Order Placed</button>
        </>
    )
}
