import React from 'react';
import { useCount } from './CountContext';

const IncrementButton = () => {
    const { increment } = useCount();

    return (
        <button onClick={increment}>
            Increment Count
        </button>
    );
};

export default IncrementButton;
