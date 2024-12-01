import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);
    const handleCube = (num) => {
        console.log("Calculation Done..");
        return Math.pow(num, 3)
    }
    
    const result = useMemo(() => handleCube(number), [number])
    const render = useMemo(() => console.log("render component"),[])
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1>UseMemoHook</h1>
            <input className='p-2 border rounded-lg border-zinc-400 me-2' type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <h3>Cube of number: {result}</h3>
            <div>
                <button className='btn btn-warning' onClick={() => setCounter(counter + 1)}>Increment ++</button>
                <h3>Count: {counter}</h3>
            </div>
        </div>
    )
}

export default UseMemoHook