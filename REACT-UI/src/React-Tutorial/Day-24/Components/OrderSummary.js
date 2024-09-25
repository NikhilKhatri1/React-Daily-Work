import React from 'react'
import { useNavigate } from 'react-router-dom'
export const OrderSummary = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Order Summary</h1>
            <h4>Order Confirmed</h4>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}
