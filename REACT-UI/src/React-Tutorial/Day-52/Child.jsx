import React, { memo } from 'react'

const Child = memo(({ name }) => {

    console.log("Render child Component")
    return (
        <div>
            <h1>Child Component</h1>
            <h3>{name}</h3>
        </div>
    )
})

export default Child