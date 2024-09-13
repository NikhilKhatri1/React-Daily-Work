import React from 'react'

function ChildComponent({ value, onChange }) {
    const HandleChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <input
            type="text"
            value={value}
            onChange={HandleChange}
        />
    )
}

export default ChildComponent