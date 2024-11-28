import React from 'react'

const Array = () => {
    const myArry = [1, 2, 3, 4];
    return (
        <div>
            <ul>
                {
                    myArry.map((value) => <li key={value}>{value}</li>)
                }
            </ul>
        </div>
    )
}

export default Array