import { useState } from "react";

export function InputName() {
    const [name, setname] = useState('');

    const handleChange = (event) => {
        setname(event.target.value);
    }
    return (
        <div>
            <input type="text" value={name} onChange={handleChange} placeholder="Enter Your Name" />
            <p>Your Name is {name}</p>
        </div>
    )
}