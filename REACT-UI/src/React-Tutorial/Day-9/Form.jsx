import { useState } from "react";
export function Form() {
    const [name, setName] = useState('Tyler');
    const [age, setAge] = useState(42);
    return (
        <div className="container-fluid m-4 p-4 w-25">
            <input
                type="text"
                onChange={e => { setName(e.target.value) }}
                value={name}
                className="form-control"
            />
            <button onClick={() => setAge(age + 1)} className="btn btn-primary mt-4 me-2">Increment</button>
            <button onClick={() => { setName('Tyler'); setAge(42) }} className="btn btn-warning mt-4">Reset</button>
            <h4>I'm {name} My Age is {age}</h4>
        </div>
    )
}