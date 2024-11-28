import React from 'react'
import Child from './Child'

const Parent = () => {
    const value = {
        name: "Alice",
        phone: "+1 23456563"
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <Child value={value} />
        </div>
    )
}

export default Parent