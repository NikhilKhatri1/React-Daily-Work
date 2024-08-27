import { useState } from "react";
export function TextInputChange() {
    const [text, setText] = useState('Hello');
    function HandleInputChange(e) {
        setText(e.target.value);
    }
    function ResetClick() {
        setText('Hello');
    }
    return (
        <div className="container-fluid m-4 p-4">
            <input type="text" className="form-control w-25" onChange={HandleInputChange} value={text} />
            <h3>Your Text : {text}</h3>
            <button onClick={ResetClick} className="btn btn-primary">Reset</button>
        </div>
    )
}