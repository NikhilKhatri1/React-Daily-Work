import { useState } from "react";
import React from "react";
export function NestedArrayOfObject() {
    const [people] = useState([
        {
            name: 'Alice',
            age: 20,
            city: 'new York',
            hobbies: ['Reading', 'Running', 'Football']
        },
        {
            name: 'Bell',
            age: 26,
            city: 'UK',
            hobbies: ['Cricket', 'Gaming', 'Football']
        },
        {
            name: 'Mika',
            age: 27,
            city: 'USA',
            hobbies: ['Swiming', 'Running', 'Hockey']
        },
    ])
    return (
        <div>
            <h1>Person Information</h1>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>
                        <p>Name:{person.name}</p>
                        <p>Age:{person.age}</p>
                        <p>City:{person.city}</p>
                        <h3>Hobbies:</h3>
                        <ul>
                            {person.hobbies.map((hobby) => (
                                <li key={hobby}>
                                    <p>{hobby}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}