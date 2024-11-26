import React, { useRef } from 'react'

const UseRefHookDom = () => {
    const inputElement = useRef();

    const btnClicked = () => {
        console.log(inputElement.current.className);
        inputElement.current.className = ` bg-primary`;
    }
    return (
        <div className='flex m-4'>
            <input type="text" ref={inputElement} className='form-control w-25 me-2' />
            <button onClick={btnClicked} className='btn btn-primary'>click here</button>
        </div>
    )
}

export default UseRefHookDom