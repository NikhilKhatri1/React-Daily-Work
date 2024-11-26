import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    const { phone } = useContext(AppContext)
    return (
        <div>
            <h1>Footer</h1>
            <h5>Phone: {phone}</h5>
        </div>
    )
}

export default Footer