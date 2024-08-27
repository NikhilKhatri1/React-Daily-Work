import { useState } from "react";
export function Checkbox() {
    const [checked, setChecked] = useState(true);
    function HandleCheck(e) {
        setChecked(e.target.checked);
    }
    return (
        <div className="container-fluid m-4 p-4 border border-1 w-25">
            <label className="d-flex">
                <input type="checkbox"
                    className="form-check me-2"
                    checked={checked}
                    onChange={HandleCheck}
                />
                I like This..
            </label>
            <h3>You {checked ? 'checked' : 'did not checked'} this</h3>
        </div>
    )
}