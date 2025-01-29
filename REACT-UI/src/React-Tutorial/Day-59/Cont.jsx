import React from 'react';
import Props from './Props';  // Import the Props component
import Child from './c';  // Import the Child component

const Cont = () => {
    return (
        <div>
            {/* Wrap Child component with Props to provide context */}
            <Props>
                <Child />
            </Props>
        </div>
    );
}

export default Cont;
