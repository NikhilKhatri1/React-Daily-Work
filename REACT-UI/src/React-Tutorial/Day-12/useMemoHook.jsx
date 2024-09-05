import { useState, useMemo } from "react";

export function UseMemoHook() {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);
    function numberCube(num) {
        console.log("Calculation Done");
        return Math.pow(num, 3);
    }

    const result = useMemo(() => {return numberCube(number) }, [number]);

    return (
        <div className="m-4 p-4">
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} className="form-control w-25" />
            <h1>number Cube: {result}</h1>
            <button className="btn btn-primary" onClick={() => { setCount(count + 1) }}>count++</button>
            <h1>Count : {count}</h1>
        </div>
    )
}