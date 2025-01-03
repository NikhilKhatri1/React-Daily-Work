import React, { useState } from 'react'
import Child from './Child';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='m-4'>
            <h1>Parent Component</h1>
            <Child value={{ count, setCount }} />
        </div>
    )
}

export default App