import React from 'react'
// useParam is used to display detail of route component
import { useParams } from 'react-router-dom'
const UserDetail = () => {
    const params = useParams()
    const userId = params.userId
    // Using Destructuring 
    // const { userId } = useParams()
    return (
        <div>Detail of User {userId}</div>
    )
}

export default UserDetail