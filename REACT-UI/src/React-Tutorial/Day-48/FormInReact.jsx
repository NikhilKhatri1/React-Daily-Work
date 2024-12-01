import React, { useState } from 'react'

const FormInReact = () => {
    const [name, setName] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault();
        alert(`Name submitted ${name}`)
    }
    return (
        <form onSubmit={HandleSubmit}>
            <h1>form Data</h1>
            <h1>Name is : {name}</h1>
            <div className='flex items-center justify-center'>
                <input className='p-2 border-2 rounded-md me-2 border-zinc-900' type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <button type='submit' className='btn btn-primary' >Submit</button>
            </div>
        </form>
    )
}

export default FormInReact