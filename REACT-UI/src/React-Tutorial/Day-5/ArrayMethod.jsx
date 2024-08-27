import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

export function ArrayComponent() {
    const [array] = useState(["Banana", "Apple", "Orange"]);

    return (
        <div>
            {array.map((item, index) => (
                <p key={index}>{item}</p> // Use <p> for each item with a unique key
            ))}
        </div>
    );
}

