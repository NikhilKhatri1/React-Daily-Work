import React, { useMemo, useState } from 'react'

function UseMemoHook() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCountertwo] = useState(0);
    function HandleClickOne() {
        setCounterOne(counterOne + 1);
    }
    function HandleClickTwo() {
        setCountertwo(counterTwo + 1);
    }
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne])
    return (
        <div>
            <div className='m-3'>
                <button onClick={HandleClickOne} className='btn btn-primary' >Count is {counterOne}</button>
                <span> Even Or Not- {isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div className='m-3'>
                <button onClick={HandleClickTwo} className='btn btn-primary'>Count is {counterTwo}</button>
            </div>
        </div>
    )
}

export default UseMemoHook