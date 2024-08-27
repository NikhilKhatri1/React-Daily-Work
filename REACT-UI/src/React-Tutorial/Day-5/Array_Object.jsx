import { useState } from "react";
import React from "react";
export function ArrayOfObject() {
    const [people] = useState([
        { name: 'Alice', age: 20, city: 'New York' },
        { name: 'Bob', age: 24, city: 'Delhi' },
        { name: 'David', age: 26, city: 'HYD' }
    ]);
    return (
        <div>
            <h1>Person Information</h1>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>
                        <p>Name: {person.name}</p>
                        <p>Age: {person.age}</p>
                        <p>City:{person.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}