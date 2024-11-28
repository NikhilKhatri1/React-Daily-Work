import React from 'react'
import Child from './Child'

const Parent = () => {
    const userName = 'James Morgan'
    const phone = '+1 234567889'
    return (
        <div>
            <h1>Parent Component</h1>
            <Child value={{ userName, phone }} />
        </div>
    )
}

export default Parent
