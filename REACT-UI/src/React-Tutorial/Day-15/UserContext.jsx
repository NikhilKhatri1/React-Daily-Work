// UserContext.jsx

import React, { useState, createContext } from 'react';
import User from './components/User.js';

export const UserContext = createContext(null);

export function UserContextProvider() {
    // const [msg, setMsg] = useState('');
    // function handleChange(e) {
    //     setMsg(e.target.value);
    // }
    const phoneNumber = " +91 2342352222222";
    return (
        <UserContext.Provider value={phoneNumber}>
            <div className='border border-3 border-dark w-50 text-center mx-auto mt-4 bg-warning' style={{ height: '400px' }}>
                <h1>This is Parent</h1>
                {/* <input type="text" value={msg} onChange={handleChange} /> */}
                <User />
                <p>Phone Number : {phoneNumber} </p>
            </div>
        </UserContext.Provider>
    );
}

// export { UserContext, UserContextProvider };
