import React, { useState } from 'react'

const InputChange = () => {
    const [input, setInput] = useState("")
    const HandleChange = (event) => {
        setInput(event.target.value)
    }
    return (
        <div>
            <h1>InputChange</h1>
            <label htmlFor="Name">Name: </label>
            <input type="text" id='Name' onChange={HandleChange} className='form-control w-25' />
            <h5>{input}</h5>
        </div>
    )
}

export default InputChange