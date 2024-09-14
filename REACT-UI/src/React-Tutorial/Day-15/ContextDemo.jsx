
import { createContext, useContext, useState } from "react"

let UserContext = createContext(null);

export function Level1Component() {

    let context = useContext(UserContext);

    return (
        <div className="m-4 p-4 bg-danger text-white">
            <h2>Level-1 Component</h2>
            {context}
            <Level2Component />
        </div>
    )
}

export function Level2Component() {

    let context = useContext(UserContext);

    return (
        <div className="m-4 p-4 bg-warning text-dark">
            <h2>Level-2 Component</h2>
            <p>{context}</p>
        </div>
    )
}

export function ContextDemo() {
    const [msg, setMsg] = useState();

    function handleNameChange(e) {
        setMsg(e.target.value)
    }

    return (
        <div className="container-fluid bg-dark text-white p-4">
            <UserContext.Provider value={msg}>
                <h1>Parent - <input type="text" onChange={handleNameChange} /> </h1>
                <Level1Component />
            </UserContext.Provider>
        </div>
    )
}