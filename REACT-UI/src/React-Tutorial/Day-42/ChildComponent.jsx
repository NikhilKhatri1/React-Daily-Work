import React from 'react'

const ChildComponent = (props) => {
    return (
        <div>
            <h1>Child Component</h1>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default ChildComponent