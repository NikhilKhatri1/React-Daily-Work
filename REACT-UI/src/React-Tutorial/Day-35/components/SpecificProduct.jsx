import React, { useState } from 'react'
import { useGetProductsByIdQuery } from '../service/dummyData'

const SpecificProduct = () => {
    const [id, setId] = useState(1)
    const [showDetails, setShowDetails] = useState(false)
    const { data, isError, isLoading } = useGetProductsByIdQuery(id)

    if (isError) {
        return <h1>Oops, there is an error</h1>
    }

    if (isLoading) {
        return <h1>Loading.....</h1>
    }

    const handleClick = () => {
        setShowDetails(true) // Set to true to show product details
    }

    return (
        <div className='m-2'>
            <h1>Specific Data</h1>
            <div className='flex items-center'>
                <h1 className='me-3'>Search</h1>
                <input
                    className='border border-gray-700 rounded me-2'
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button className='btn btn-primary btn-sm' onClick={handleClick}>Click</button>
            </div>
            {showDetails && (
                <div>
                    <p>ID: {data.id}</p>
                    <p>Title: {data.title}</p>
                    <p>Category: {data.category}</p>
                </div>
            )}
        </div>
    )
}

export default SpecificProduct
