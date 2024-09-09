import React from 'react';
import { useCount } from './CountContext';

const CountDisplay = () => {
    const { count } = useCount();

    return (
        <div>
            Current Count: {count}
        </div>
    );
};

export default CountDisplay;
