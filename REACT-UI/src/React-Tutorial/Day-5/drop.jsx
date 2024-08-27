import { useState } from "react";
import React from "react";

export function DropDown() {
    const people = [
        { name: 'Alice', age: 20, city: 'NY', hobbies: ['A', 'B', 'C'] },
        { name: 'Mango', age: 23, city: 'BC', hobbies: ['C', 'B', 'A'] },
        { name: 'Alan', age: 29, city: 'UK', hobbies: ['K', 'C', 'D'] }
    ];

    const [selectedPerson, setSelectedPerson] = useState(null);

    const handlePersonChange = (e) => {
        const selectedName = e.target.value;
        const person = people.find(person => person.name === selectedName);
        setSelectedPerson(person);
    };

    return (
        <div className="m-4 p-4">
            <h1>Information Detail</h1>
            <select
                style={{ width: '150px' }}
                value={selectedPerson ? selectedPerson.name : ""}
                onChange={handlePersonChange}
            >
                <option value="" disabled>Select One</option>
                {people.map((person) => (
                    <option value={person.name} key={person.name}>{person.name}</option>
                ))}
            </select>
            <div>
                {/* To check option is default  or not */}
                {selectedPerson ? (
                    <>
                        <h3>Hi! I'm {selectedPerson.name}</h3>
                        <p>My Age is {selectedPerson.age}</p>
                        <p>My hobbies are {selectedPerson.hobbies.join(", ")}</p>
                    </>
                ) : (
                    <p>Please select a person to see their details.</p>
                )}
            </div>
        </div>
    );
}
