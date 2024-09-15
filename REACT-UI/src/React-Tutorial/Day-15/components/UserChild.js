// UserChild.js

import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function UserChild() {
  const context = useContext(UserContext);
  return (
    <div className='my-4 border border-3 border-dark w-75 mx-auto bg-success' style={{ height: '120px' }}>
      <h1>This is UserChild</h1>
      <p>Phone Number : {context}</p>
    </div>
  );
}

export default UserChild;
