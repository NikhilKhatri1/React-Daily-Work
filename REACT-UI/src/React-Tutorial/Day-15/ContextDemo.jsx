import React, { useContext, createContext, useState } from 'react';

export const userContext = createContext(null);

export function Level1Component() {
    const context = useContext(userContext); // Use the context correctly
    return (
        <div className='bg-warning mt-4 p-4'>
            <h1>Level-1 Component</h1>
            <p className='fw-bold'>Message = {context}</p>
            <Level2Component />
        </div>
    );
}

export function Level2Component() {
    const context = useContext(userContext); // Use the context correctly
    return (
        <div className='bg-danger mt-2 p-3'>
            <h1>Level-2 Component</h1>
            <p className='fw-bold'>Message = {context}</p>
        </div>
    );
}

export default function ContextDemo() {
    const [msg, setMsg] = useState('');

    function handleInputChange(e) {
        setMsg(e.target.value);
    }

    return (
        <div className='bg-success p-4'>
            <userContext.Provider value={msg}>
                <h1>Parent Component</h1>
                <div className='d-flex text-align-center align-items-center'><span className='fw-bold me-4'>Message : </span><input
                    type="text"
                    onChange={handleInputChange}
                    className='form-control w-25'
                /></div>
                <Level1Component />
            </userContext.Provider>
        </div>
    );
}
