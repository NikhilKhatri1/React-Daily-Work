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
        <div className='m-2'>
            <h1>Input Field</h1>
            <h2>Hello , {name}</h2>
            <div className='input-group d-flex w-25'>
                <input className='form-control w-25' type="text" onChange={HandleChange} placeholder={name} />
                <button className='btn btn-primary' onClick={HandleClear}>Clear Name</button>
            </div>
        </div>
    )
}

export default ExampleOne