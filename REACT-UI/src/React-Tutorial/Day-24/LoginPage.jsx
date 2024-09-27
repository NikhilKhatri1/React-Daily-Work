import React from 'react'
import { useParams } from 'react-router-dom'
export const LoginPage = () => {
    const params = useParams
    const userId = params.userId
    return (
        <div>Welcome {userId}! </div>
    )
}
