import React from 'react';
import Child from './Child';

function Parent() {
    const userName = "John Doe";
    return (
        <div>
            <h1>Welcome to the App</h1>
            <Child name={userName} />
        </div>
    );
}

export default Parent;
