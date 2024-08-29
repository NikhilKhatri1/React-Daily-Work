import { useEffect, useState } from "react";
export function Checkbox() {
    const [checked, setChecked] = useState(true);
    const [stylObj, setStyleObj] = useState("");
    function HandleCheck(e) {
        setChecked(e.target.checked);
    }

    useEffect(() => {
        if (checked) {
            setStyleObj("text-warning")
        } else {
            setStyleObj("text-danger")
        }
    }, [checked])
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
            <h3 className={stylObj}>You {checked ? "have Checked" : "have Not Checked"} this</h3>
        </div >
    )
}