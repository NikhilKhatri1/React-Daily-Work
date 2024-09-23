import React from 'react'

function Count({ text, Count }) {

    console.log(`Redering ${text}`)
    return (
        <div>
            <h1>{text} - {Count}</h1>
        </div>
    )
}

export default React.memo(Count)