import { useState } from "react";

export function useIncrement(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const reset = () => {
        setCount(initialValue);
    };
    return {
        count,
        increment,
        reset,
    };
}