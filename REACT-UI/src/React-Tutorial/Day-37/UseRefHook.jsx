import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [value, setValue] = useState(0);
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    })
 

    return (
        <div className='m-4 text-center'>
            <button onClick={() => setValue(prev => prev - 1)} className=' btn btn-warning'>Decrement by 1</button>
            <h1 className='text-center'>{value}</h1>
            <button onClick={() => setValue(prev => prev + 1)} className='btn btn-primary'>Increment by 1</button>
            <h1>Render Count: {count.current}</h1>
        </div>
    )
}

export default UseRefHook