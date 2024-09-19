import React from 'react'
import ChildComponent from './ChildComponent'
function ParentComponent() {

    return (
        <div>
            <h1>ParentComponent</h1>
            <ChildComponent title={"Child Component"} items={['item-1', 'item-2', 'item-3']} />
        </div>
    )
}

export default ParentComponent