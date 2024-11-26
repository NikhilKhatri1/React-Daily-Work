import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubeNumber(num) {
        console.log("Calculation Done!");
        return Math.pow(num, 3)
    }

    const result = useMemo(() => {
        // this memo function will rerender the cubeNumber() 
        // when number changes on counter change  it will not...
        
        return cubeNumber(number)
    
    }, [number]);

    return (
        <div className='flex flex-col items-center justify-center text-center h-[100vh]'>

            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className=' form-control w-25' />
            <h1>Cube of number: {result} </h1>

            <button className='btn btn-primary' onClick={() => { setCounter(counter + 1) }}>Counter ++</button>
            <h1>Counter: {counter}</h1>
        </div>
    )
}

export default UseMemo