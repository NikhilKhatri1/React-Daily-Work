import React from 'react'
import DefaultPropChild from './DefaultPropChild'

const DefaultPropParent = () => {
    return (
        <div>
            <h1>Parent Component</h1>
            <DefaultPropChild />
            <DefaultPropChild name="John" />
        </div>
    )
}

export default DefaultPropParent