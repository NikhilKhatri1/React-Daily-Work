import { useEffect, useState } from "react";
export function UseEffectHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 2000)
    }, [count])

    return (
        <div className="m-4 p-4">
            <h1>Count :  {count} Every 2 Seconds </h1>
        </div>
    )
}