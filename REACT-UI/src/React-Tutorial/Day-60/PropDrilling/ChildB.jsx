import React from 'react'

const ChildB = (props) => {
    const { name, age } = props.person
    return (
        <div>
            <h1>ChildB</h1>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}

export default ChildB