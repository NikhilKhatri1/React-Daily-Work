import { useEffect, useState } from "react"

export function App() {
    const [user, setUser] = useState({
        name: "John",
        Age: 24,
        Hobbies: "Football"
    })

    function NameChange() {
        setUser((prev) => {
            return { ...prev, name: "David" }
        });
    }
    console.log(user);
    return (
        <div>
            <h1>Name : {user.name}</h1>
            <h2>Age : {user.Age}</h2>
            <h2>hobbies : {user.Hobbies}</h2>
            <button onClick={NameChange}>Name Change</button>
        </div>
    )
}