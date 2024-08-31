import { useState} from "react";
export function useCount(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    function increment() {

        setCount(prevCount => prevCount + 1);
    }
    function reset() {
        setCount(initialValue);
    }

    return {
        count,
        increment,
        reset,
    }
}