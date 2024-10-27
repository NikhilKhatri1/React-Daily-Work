import React from 'react'
import { useRef } from 'react'

const UseRefHook = () => {
    const inputElement = useRef(null)
    console.log(inputElement);
    const handleClick = () => {
        inputElement.current.focus();
        inputElement.current.value = 'HuXn'
    }
    return (
        <div className='m-4'>
            <h1>Use Ref hook</h1>
            <input type="text" ref={inputElement} className='border w-[200px] border-neutral-700 py-2 px-2 rounded bg-zinc-100' />
            <button className='px-2 py-2 text-white bg-blue-400 rounded ms-2' onClick={handleClick}>Focus and Write HuXn</button>
        </div>
    )
}

export default UseRefHook