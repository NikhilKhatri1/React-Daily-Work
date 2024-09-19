import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {
                    props.items.map(item => <li key={item}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default ChildComponent