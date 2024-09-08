// Click Counter using useRef()5
import { useRef } from "react";

export function ClickCount() {
    const count = useRef(0);
    function HandleClick() {
        count.current = count.current + 1;
        alert(`Your have clicked ${count.current} times`);
    }
    return (
        <div className="container-fluid m-4 p-4">
            <button onClick={HandleClick} className="btn btn-primary">Click me</button>
        </div>
    )
}