import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export function DropdownComponent() {
    const [people] = useState([
        {
            name: 'Alice',
            age: 20,
            city: 'New York',
            hobbies: ['Reading', 'Traveling', 'Cooking']
        },
        {
            name: 'Bob',
            age: 24,
            city: 'Delhi',
            hobbies: ['Photography', 'Gardening', 'Cycling']
        },
        {
            name: 'David',
            age: 26,
            city: 'HYD',
            hobbies: ['Swimming', 'Running', 'Music']
        }
    ]);

    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    // Handle change event of the select element
    const handleSelectChange = (event) => {
        const selectedName = event.target.value;
        const person = people.find(p => p.name === selectedName);
        setSelectedPerson(person);
    };

    return (
        <div className='m-4 p-4'>
            <h1>Person Information</h1>
            <select onChange={handleSelectChange} value={selectedPerson.name}>
                {people.map((person, index) => (
                    <option key={index} value={person.name}>
                        {person.name}
                    </option>
                ))}
            </select>

            <div>
                <h2>Details for {selectedPerson.name}</h2>
                <p>Age: {selectedPerson.age}</p>
                <p>City: {selectedPerson.city}</p>
                <h3>Hobbies:</h3>
                <ul>
                    {selectedPerson.hobbies.map((hobby, hobbyIndex) => (
                        <li key={hobbyIndex}>{hobby}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropdownComponent />);
