import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Contact = () => {
    const { phone, name } = useContext(AppContext)
    return (
        <div>
            <h1>Contact</h1>
            <h5>Name: {name}</h5>
            <h5>Phone: {phone}</h5>
        </div>
    )
}

export default Contact