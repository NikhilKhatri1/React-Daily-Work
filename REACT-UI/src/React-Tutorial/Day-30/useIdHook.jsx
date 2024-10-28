import React from 'react'
import { useId } from 'react'

const UseIdHook = () => {
    const id = useId()
    return (

        <div className='m-2'>
            <h1>useIdHook</h1>
            <label htmlFor={`${id}`}>Input : </label>
            <input type="text" id={id} className='border border-zinc-950 ms-2' placeholder='Enter value' />
        </div>
    )
}

export default UseIdHook