import React from 'react'

const Iterate = () => {
    const arr = [1, 2, 3, 4, 5]

    return (
        <div>
            <h1>Iterate Array</h1>
            <ul>
                {
                    arr.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>

        </div>
    )
}

export default Iterate