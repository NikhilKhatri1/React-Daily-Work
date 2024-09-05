
import { useCallback, useState } from "react";
import Headercomponent from "./Headercomponent";
export function UseMemoComponent() {
    const [count, setCount] = useState(0);
    const newfn = useCallback(() => { }, [])
    return (
        <div className="m-4 p-4">
            <Headercomponent newfn={newfn} />
            <h1 className="my-4">{count}</h1>
            <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>Count Click</button>
        </div>
    )
}