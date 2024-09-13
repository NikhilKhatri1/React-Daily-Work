import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [inputValue, setInputValue] = useState('');
    function HandleParentChange(value) {
        setInputValue(value);
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent value={inputValue} onChange={HandleParentChange} />
            <p>Child value : {inputValue} </p>
        </div>
    )
}

export default ParentComponent