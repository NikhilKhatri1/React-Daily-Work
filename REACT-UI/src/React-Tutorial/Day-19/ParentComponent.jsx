import React from 'react'
import ChildComponent from './ChildComponent'
function ParentComponent() {

    return (
        <div>
            <h1>ParentComponent</h1>
            {/* in props you need to defined every value tht you have delclared in Child Component */}
            <ChildComponent title={"Child Component"} items={['item-1', 'item-2', 'item-3']} />
            <ChildComponent title={"Navbar"} items={['A', 'B', 'C']} />
        </div>
    )
}

export default ParentComponent