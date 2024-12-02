import React, { useState } from "react";

const App = () => {
    return (
        <div className="m-4">
            <h1>HOC Example</h1>
            <RedCounter /> {/* Use the wrapped component directly */}
        </div>
    )
}

// HOC that adds a red border around the component
const withRedBorder = (WrappedComponent) => {
    return (props) => (
        <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
            <WrappedComponent {...props} />
        </div>
    );
};

// Simple Counter component
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment++</button>
        </div>
    );
};

// Apply the HOC to Counter
const RedCounter = withRedBorder(Counter);

export default App;
