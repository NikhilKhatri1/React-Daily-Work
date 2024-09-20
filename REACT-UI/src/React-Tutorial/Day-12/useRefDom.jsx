import { useRef } from "react";
export function UseRefHookDom() {
    const DomElem = useRef();
    const BtnRef = useRef();
    const btnClick = () => {
        console.log(DomElem.current);
    }
    const btnRef = () => {
        if (BtnRef.current) {
            console.log(BtnRef.current.className);
        }

    }
    return (
        <div className="m-4 p-4">
            <input type="text" className="form-control w-25 my-3" ref={DomElem} />
            <button className="btn btn-warning mx-3" ref={BtnRef} onClick={btnRef} >Btn Click</button>

            <button className="btn btn-primary" onClick={btnClick}>Click me</button>
        </div>
    )
}