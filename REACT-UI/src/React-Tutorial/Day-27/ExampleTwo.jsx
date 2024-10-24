import React from 'react'

const ExampleTwo = () => {
    const str = '{"name":"Alice","age":18}'
    const obj = JSON.parse(str);

    return (
        <div className='m-4'>
            <p>Name : {obj.name}</p>
            <p>Age : {obj.age}</p>
        </div>
    )
}

export default ExampleTwo