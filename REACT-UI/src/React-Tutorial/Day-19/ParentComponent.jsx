import React from 'react'
import ChildComponent from './ChildComponent'


function ParentComponent() {
    return (
        <div className='container-fluid'>
            <h1>Parent Component</h1>
            <ChildComponent title='Child Component' items={['item-1', 'item-2', 'item-3']} />
        </div>
    )
}

export default ParentComponent