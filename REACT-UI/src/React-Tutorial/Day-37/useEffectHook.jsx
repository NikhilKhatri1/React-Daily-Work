import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(prev => prev + 1)
        }, 2000)
    }, [])
    return (
        <div className='m-4'>
            <h1>I've Render {count} Times</h1>
            <p>without dependency it will re-render  component everytime when value changes</p>
            <p>empty[] it will render the component only once when component loaded..
                <br />if any changes are done in the component then there vaalue will change also</p>
        </div>
    )
}

export default UseEffectHook