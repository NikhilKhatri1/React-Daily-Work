import React, { useContext } from 'react';
import { userContext } from './Props';

// Import the context
// import { userContext } from './Props';  // Import the context from Props component
// 
const Child = () => {
    // Use the context value
    const { name } = useContext(userContext);

    return (
        <div>
            <h1>Child Component</h1>
            <p>{name}</p>
        </div>
    );
}

export default Child;
