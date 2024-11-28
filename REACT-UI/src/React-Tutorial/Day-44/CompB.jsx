import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
    return (
        <div>
            <h1>Component-B</h1>
            <CompC person={props.person} />
        </div>
    )
}

export default CompB