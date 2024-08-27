import { useState } from "react";

export function ItemList() {
    const [items, setItems] = useState(['item1', 'item2']);
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={() => setItems([...items, `Item ${items.length + 1}`])}>Add item</button>
        </div>
    )
}