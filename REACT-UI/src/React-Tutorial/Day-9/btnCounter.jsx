import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    function HandleClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={HandleClick} className="btn btn-primary m-4"> You pressed me {count} Times</button>
    )
}