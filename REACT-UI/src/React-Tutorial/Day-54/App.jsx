import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
    const [items, setItems] = useState(['item-1', 'item-2', 'item-3', 'item-4']);
    // const [newItems]
    const handleRemove = () => {
        setItems(prev => prev.filter(item => item !== 'item-1' && item !== 'item-2'))
        // console.log(items)
    }
    return (
        <div>
            <ul>
                {
                    items.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
            <button className='p-2 border-red-500 border-1' onClick={handleRemove}>Remove item-1 and 3</button>
        </div>
    )
}

export default App