import React, { useCallback, useState } from 'react'
import Header from './component/Header';

const UseCallbackHook = () => {

    const [count, setCount] = useState(0);

    const newFn = useCallback(()=>{},[])

    return (

        <div className='flex items-center justify-center h-[100vh] flex-col'>
            <Header newFn={newFn} />
            <h1>Counter : {count}</h1>
            <button className='btn btn-primary' onClick={() => setCount(prev => prev + 1)}>click here</button>
        </div>
    )
}

export default UseCallbackHook