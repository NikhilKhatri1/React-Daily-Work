import { useEffect, useState } from 'react';

export function DataBinding() {
    const [price, setPrice] = useState(40000, 44);
    useEffect(() => {
        setPrice(50000.48);
    }, [])
    return (
        <div>
            <h2>Data Binding</h2>
            Price : {price}
        </div>
    )
}