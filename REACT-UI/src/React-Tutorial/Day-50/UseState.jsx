import React, { useState } from 'react'
import ChildProp from './ChildProp'

const UseState = () => {
    const [data, setData] = useState("Hello from Parent");

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildProp value={{ data, setData }} />
        </div>
    )
}

export default UseState