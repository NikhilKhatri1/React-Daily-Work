import React, { useState } from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

const ParentApp = () => {
    
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <ComponentOne count={count} OnClickHandler={() => setCount(count + 1)} />
            <ComponentTwo count={count} OnClickHandler={() => setCount(count + 1)} />
        </div>
    )
}

export default ParentApp