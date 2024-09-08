import { useRef } from "react";

export function FocusInput() {
    const inputRef = useRef(null);
    function HandleFocus() {
        inputRef.current.focus();
    }
    return (
        <div className="m-4 p-4">
            
        </div>
    )
}