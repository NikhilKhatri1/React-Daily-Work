import React from 'react'

const ChildProp = (props) => {
    const { data, setData } = props.value
    return (
        <div>
            <h1>ChildProp</h1>
            <h1>{data}</h1>
        </div>
    )
}

export default ChildProp