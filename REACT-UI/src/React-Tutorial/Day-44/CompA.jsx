import React from 'react'
import CompB from './CompB'

const CompA = (props) => {
    return (
        <div>
            <h1>Component-A</h1>
            <CompB person={props.person} />
        </div>
    )
}

export default CompA