import React, { useContext } from 'react'
import { ContextApi } from './Provider'

const Child = () => {
    const { data, setData } = useContext(ContextApi);

    const handleChange = () => {
        setData('Updated Data')
    }
    return (
        <div>
            <h1>Child Component</h1>
            <h1>{data}</h1>
            <button onClick={handleChange} className='p-2 transition-all duration-200 border-gray-200 bg-gray-50 border-1 rounded-xl hover:bg-red-700 hover:text-white'>Change Data</button>
        </div>
    )
}

export default Child