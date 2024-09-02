import { useState, useEffect } from "react";

export function useEffectHook() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        
    })
    return (
        <div>
            <p>{count}</p>
            <button onClick={countClick}>Count Click</button>
        </div>
    )
}