import React from 'react'
import Child from './Child';

const DefaultProp = () => {
    return (
        <div className='p-2'>
            <h1>DefaultProp</h1>
            <Child />
            <Child name="John" />
        </div>
    )
}

export default DefaultProp