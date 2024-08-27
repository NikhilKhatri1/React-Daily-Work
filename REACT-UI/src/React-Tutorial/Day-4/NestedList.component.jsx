import React from "react"; // Ensure React is imported
import { useState } from "react";

export function NestedList() {
    const [data] = useState([
        { category: "Electronics", products: ["TV", "Mobile"] },
        { category: "Footwear", products: ["Shoes", "Casuals"] }
    ]);

    return (
        <div className="container-fluid">
            <h1>Nested List</h1>
            <ol>
                {
                    data.map(item =>
                        <li key={item}>{item.category}
                            <ul>
                                {
                                    item.products.map(product => <li key={product}>{product}</li>)
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
        </div>
    );
}
