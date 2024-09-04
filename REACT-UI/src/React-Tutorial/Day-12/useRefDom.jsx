import { useRef } from "react";
export function UseRefHookDom() {
    const DomElem = useRef();
    const btnClick = () => {
        console.log(DomElem);
    }
    return (
        <div className="m-4 p-4">
            <input type="text" ref={DomElem} />
            <button className="btn btn-primary" onClick={btnClick}>Click me</button>
        </div>
    )
}