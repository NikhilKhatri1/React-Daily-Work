import { useState } from "react";

export function Counter() {
    const [count, setcount] = useState(0);
    return (
        <div>
            <p>You Click {count} Times.</p>
            <button onClick={() => setcount(count + 1)}>Click Me</button>
        </div>
    )
}
