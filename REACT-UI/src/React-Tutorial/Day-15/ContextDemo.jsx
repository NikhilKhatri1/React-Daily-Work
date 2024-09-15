import { useContext, createContext, useState } from "react";

const userContext = createContext(null);

export function Level1Component() {
    const context = useContext(userContext);

    return (
        <div className="m-4 p-4 bg-danger text-white">
            <h1>Level-1 Component</h1>
            <p>{context} </p>
            <Level2Component />
        </div>
    )

}

export function Level2Component() {
    const context = useContext(userContext);

    return (
        <div className="m-4 p-4 bg-warning text-dark">
            <h1>level-2 Component</h1>
            <p>{context} </p>
        </div>
    )
}

export function ContextDemo() {
    const [msg, setMsg] = useState('');

    function HandleChange(e) {
        setMsg(e.target.value);
    }

    return (
        <div className="m-4 p-4 bg-dark text-white">
            <userContext.Provider value={msg} >
                <h1>Parent Component : <input type="text" value={msg} onChange={HandleChange} /></h1>
                <Level1Component />
            </userContext.Provider>
        </div>
    )
}