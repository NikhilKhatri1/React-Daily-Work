import { useState } from "react";
export function Value() {
    const [name, setname] = useState('');
    const HandleChange = (event) => {
        setname(event.target.value);
    }
    return (
        <div>
            <input type="text" placeholder="Name" value={name} onChange={HandleChange} />
            <h3>Your Name is {name}</h3>
        </div>
    )
}