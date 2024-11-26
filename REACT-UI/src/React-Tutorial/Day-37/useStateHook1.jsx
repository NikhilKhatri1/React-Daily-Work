import React, { useState } from 'react'

const UseStateHook1 = () => {
    const [car, setCar] = useState({
        brand: "ferrari",
        model: "roma",
        year: "2023",
        color: "red"
    })

    const HandleColor = () => {
        setCar((prev) => {
            return { ...prev, color: "blue" }
        })
    }

    return (
        <div className='m-4'>
            <h1>My favourite car is {car.brand}</h1>
            <h3>car is {car.color} {car.model} from {car.year}</h3>
            <button className='btn btn-primary' onClick={HandleColor}>blue</button>
            <button className='btn btn-warning ms-2' onClick={() => setCar(prev => ({ ...prev, color: "green" }))}>green</button>
        </div>
    )
}

export default UseStateHook1