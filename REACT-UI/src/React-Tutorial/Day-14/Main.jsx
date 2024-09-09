import React from 'react';
import { CountProvider } from './CountContext.jsx';
import IncrementButton from './IncrementButton.jsx';
import CountDisplay from './countDisplay.jsx';

const App = () => {
    return (
        <CountProvider>
            <div>
                <h1>Simple Context Example</h1>
                <IncrementButton />
                <CountDisplay />
            </div>
        </CountProvider>
    );
};

export default App;
