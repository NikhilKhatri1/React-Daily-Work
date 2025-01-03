import React from 'react'

const Child = (prop) => {
    const { count, setCount } = prop.value
    const handleIncrease = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div>
            <h1>Child Component</h1>
            <p>Count : {count}</p>
            <button className='btn btn-warning' onClick={handleIncrease}>inc++</button>
        </div>
    )
}

export default Child