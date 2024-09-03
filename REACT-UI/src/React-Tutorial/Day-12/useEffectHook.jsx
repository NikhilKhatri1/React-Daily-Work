import { useState, useEffect } from "react";

export function UseEffectHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        countClick();
    }, []);

    function countClick() {
        setCount(c => c + 1);
        
    }
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={countClick}>Count Click</button>
        </div>
    )
}