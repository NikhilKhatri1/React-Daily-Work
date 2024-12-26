import React from "react";

function App() {
    const names = ["brian", "john", "alice", "claire"];
    // Find the issue in the below code snippet after rendering the list of names.

    const listItems = names.map((name) => <li>{name}</li>)

    return <ul>{listItems}</ul>
    // Warning: 
    // Each child in a list should have a unique "key" prop.
}
export default App;