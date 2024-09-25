import React, { useState, useEffect } from 'react'

function CustomHook() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
    return (
        <div className='text-center my-3'>
            <button onClick={() => setCount(count + 1)} className='btn btn-primary'>Count is {count} </button>
        </div>
    )
}

export default CustomHook