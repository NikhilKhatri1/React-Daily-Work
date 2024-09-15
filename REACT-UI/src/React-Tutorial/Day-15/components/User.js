// User.js

import React, { useContext } from 'react';
import UserChild from './UserChild';
import { UserContext } from '../UserContext';

function User() {
    const context = useContext(UserContext);
    return (
        <div className='my-5 border border-3 border-dark w-75 mx-auto bg-danger' style={{ height: '250px' }}>
            <h1>This is Child-1</h1>
            <p>Phone Number : {context}</p>
            <UserChild />
        </div>
    );
}

export default User;
