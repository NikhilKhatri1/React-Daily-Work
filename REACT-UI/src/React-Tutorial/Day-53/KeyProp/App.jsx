import React, { useRef, useState } from 'react';

function App() {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

    // Array of refs for each item
    const itemRefs = useRef([]);

    const itemDetail = (index) => {
        console.log(itemRefs.current[index]);
    };

    // Function to add a new item to the list
    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    };

    // Function to remove the last item from the list
    const removeItem = () => {
        setItems(items.slice(0, items.length - 1));
    };

    return (
        <div className="p-4">
            <button className="p-2 border-red-500 border-1 ms-2 bg-red-50" onClick={addItem}>Add Item</button>
            <button className="p-2 border-red-500 border-1 ms-2 bg-red-50" onClick={removeItem}>Remove Item</button>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)} // Assign ref to each item
                        onClick={() => itemDetail(index)} // Pass index to handle click
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
