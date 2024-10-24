import React, { useState } from 'react';

const JSONComponent = () => {
    const [inputValue, setInputValue] = useState("");
    const [parsedValue, setParsedValue] = useState(null);

    const handleChangeName = (e) => {
        setInputValue(e.target.value); // Set input value directly
    };

    const handleClick = () => {
        try {
            const result = JSON.parse(inputValue); // Attempt to parse the input value
            setParsedValue(result); // Store the parsed value
        } catch (error) {
            console.error("Invalid JSON:", error);
            setParsedValue("Invalid JSON"); // Handle parsing error
        }
    };

    return (
        <div className='m-2'>
            <h1>JSON PARSE</h1>
            <input
                type="text"
                onChange={handleChangeName}
                className='form-control w-25'
                placeholder='Enter JSON string'
            />
            <button className='btn btn-primary' onClick={handleClick}>Submit</button>
            <div className="mt-3">
                <h2>Parsed Output:</h2>
                {parsedValue && typeof parsedValue === 'object' ? (
                    <pre>{JSON.stringify(parsedValue, null, 2)}</pre> // Format as pretty JSON
                ) : (
                    <p>{parsedValue}</p> // Display error message
                )}
            </div>
        </div>
    );
}

export default JSONComponent;
