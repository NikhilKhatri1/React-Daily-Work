// Question 4

// Develop a currency converter application that allows users to input an amount in one currency
//  and convert it to another.For the sake of this challenge, you can use a hard - coded exchange rate.
// Take advantage of React state and event handlers to manage the input and conversion calculations.


import React, { useState } from 'react'

const App = () => {
    const [rupees, setRupees] = useState(0);
    const [dollar, setDollar] = useState(0);
    const handleRupees = (e) => {
        setRupees(e.target.value);
    }
    const handleConvert = () => {
        setDollar((rupees / 80).toFixed(2))
    }
    return (
        <div className='p-2'>
            <h1>Currency convertor</h1>

            <div className='w-[300px]'>
                <p>Amount in Rupees</p>
                <input type="number" onChange={handleRupees} value={rupees} placeholder='Enter the Amount' className=' form-control' />
                <p>Amount in Dollar ${dollar}</p>
                <button onClick={handleConvert} className='btn btn-primary'>Convert</button>
            </div>
        </div>
    )
}

export default App