import React from 'react'
import CompA from './CompA.jsx'

const Parent = () => {
    const person = {
        name: "James",
        age: "22"
    }
    return (
        <div>
            <h1>Parent</h1>
            <CompA person={person} />
        </div>
    )
}

export default Parent