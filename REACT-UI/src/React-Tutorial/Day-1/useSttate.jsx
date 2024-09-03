import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    const IncreaseCount = () => {
        // setCount(count + 1);   // count value is 0 + 1
        // setCount(count + 1);   // count value is 0 + 1
        // setCount(count + 1);   // count value is 0 + 1

        // to Jump 3 times You have to us "prevCount"
        setCount(prev => prev + 3);

    }
    return (
        <div className="contianer-fluid m-4 p-4">
            <h1>Count : {count} </h1>
            <button onClick={IncreaseCount}>IncreaseCount</button>
        </div>
    )
}