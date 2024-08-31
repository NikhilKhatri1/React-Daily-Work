import { useIncrement } from "./useIncreament";

export function CustomHook() {
    const { count, increment, reset } = useIncrement(0);
    return (
        <div className="container-fluid p-4 m-4">
            <h1>Count : {count}</h1>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button className="btn btn-warning ms-2" onClick={reset}>Reset</button>
        </div>
    )
}