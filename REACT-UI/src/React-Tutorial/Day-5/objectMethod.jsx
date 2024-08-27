import { useState } from "react";
import React from "react";

export function ObjectComponent() {
    const [person] = useState({ name: "Alice", age: 20, city: "New York" });
    return (
        <div>
            <h1>Hi! {person.name}</h1>
            <p>Your age is {person.age} you live in {person.city}</p>
        </div>
    );
}