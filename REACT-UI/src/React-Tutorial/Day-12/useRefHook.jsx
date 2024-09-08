import { useState, useEffect, useRef } from "react";

export function UseRefHook() {
    const [value, setValue] = useState(0);
    // const [count, setCount] = useState(0);
    const count = useRef(0);
    useEffect(() => {
        // run infinite loop
        // setCount(prev => prev + 1);
        // display first 2 bcz of strict
        count.current = count.current + 1
    });
    return (
        <div className="container-fluid m-4 p-4">
            <button onClick={() => { setValue(prev => prev - 1) }} className="btn btn-warning">-1</button>
            <h1 className="my-3 mx-2"> {value}</h1>
            <button onClick={() => { setValue(prev => prev + 1) }} className="btn btn-warning">+1</button>
            {/* <h1>Count Rerender : {count} </h1> */}
            <h1>Count Rerender : {count.current} </h1>
        </div>
    )
}
