import React from 'react'

const CompC = (props) => {
    const { name, age } = props.person
    return (
        <div>
            <h1>Component-C</h1>
            <h5>Name: {name}</h5>
            <h5>Age: {age}</h5>
        </div>
    )
}

export default CompC