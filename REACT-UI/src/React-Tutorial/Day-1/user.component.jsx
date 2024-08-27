import { useState } from "react";

export function UserDetail() {
    const [user, setUser] = useState({ Name: '', Age: 0 });
    return (
        <div>
            <p>Name:{user.Name}</p>
            <p>Age:{user.Age}</p>
            <button onClick={()=>setUser({ Name: 'Alice', Age: 30 })}>Get Details</button>
        </div>
    )
}