import React from 'react'

const ComponentTwo = ({ count, OnClickHandler }) => {
    return (
        <div>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={(OnClickHandler)}>Increment</button>
        </div>
    )
}

export default ComponentTwo