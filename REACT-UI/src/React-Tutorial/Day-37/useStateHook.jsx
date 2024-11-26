import React, { useState } from 'react'

const UseStateHook = () => {
    const [color, setColor] = useState('Red')
    const handleColor = () => {
        setColor("Blue")
    }
    return (
        <div>
            <h1>My favourite color is {color}</h1>
            <button className='btn btn-primary' onClick={handleColor}>blue</button>
            <p>UseState Hook :- UseState hook is a state variable which used to track the state of component
                <br />and update the user-Interface when the state changes.</p>
        </div>
    )
}

export default UseStateHook