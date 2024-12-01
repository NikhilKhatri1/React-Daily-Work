import React, { useEffect, useRef, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('');
    return (
        <div className='p-2'>
            <h1>Parent component</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)} className='btn btn-primary'>inc++</button>
            <input type="text" className='my-3 form-control w-25' onChange={(e) => setName(e.target.value)} />
            <Child name={name} />
        </div>
    )
}

export default Parent