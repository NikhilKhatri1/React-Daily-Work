import React, { useEffect, useState } from 'react'

const ExampleOne = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : "";
    })
    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name])

    const HandleChange = (event) => {
        setName(event.target.value);
    }
    const HandleClear = () => {
        setName("")
    }
    return (
        <div>
            <h1>Input Field</h1>
            <div className='d-flex form-'>
                <input className='form-control w-25 form-group' type="text" onChange={HandleChange} />
                <button className='btn btn-primary' onClick={HandleClear}>Clear Name</button>
            </div>
        </div>
    )
}

export default ExampleOne