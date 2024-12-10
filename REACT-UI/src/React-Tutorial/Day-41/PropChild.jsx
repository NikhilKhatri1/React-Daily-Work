import React from 'react'

const PropChild = (props) => {
    return (
        <div className='bg-indigo-200 border-2'>
            <h1>Child Component</h1>
            <h1>Count: {props.value}</h1>
            <button onClick={props.onClickIncrement} className='px-2 py-2 bg-red-300 border-red-800 rounded-lg shadow-sm border-1 '>Increment</button>
        </div>
    )
}
npms
export default PropChild