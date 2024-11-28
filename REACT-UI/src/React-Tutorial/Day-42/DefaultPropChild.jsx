import React from 'react'

const DefaultPropChild = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}

DefaultPropChild.defaultProps = {
    name: "guest"
}

export default DefaultPropChild