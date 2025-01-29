import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
    return (
        <div>
            <h1>ChildA</h1>
            <ChildB person={props.person} />
        </div>
    )
}

export default ChildA