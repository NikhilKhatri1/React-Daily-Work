import React, { useState } from 'react';

export function Example() {
    const [name, setName] = useState('Taylor');

    const handleClick = () => {
        setName('Robin');
        console.log('Current name in handleClick:', name);
    };

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={handleClick}>Change Name</button>
        </div>
    );
}

