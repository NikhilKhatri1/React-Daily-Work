import { useRef } from "react";

export function FocusInput() {
    const inputRef = useRef(null);
    function HandleFocus() {
        inputRef.current.focus();
    }
    return (
        <div className="m-4 p-4">
            <input type="text" ref={inputRef} className="form-control w-25" />
            <button onClick={HandleFocus} className="btn btn-primary">Focus on click</button>
        </div>
    )
}