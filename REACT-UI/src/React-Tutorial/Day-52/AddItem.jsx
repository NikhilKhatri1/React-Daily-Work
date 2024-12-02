import React, { useState } from 'react'

const AddItem = () => {
    const [items, setItems] = useState(["item 1", "item 2", "item 3"])
    const addItem = () => {
        setItems([...items, `item ${items.length + 1}`])
    }
    return (
        <div className='p-2'>
            <h1>Reconciliation in react</h1>
            <button className='btn btn-primary' onClick={addItem}>Add Item</button>
            {
                items.map((item, index) => (
                    <h3 key={index}>{item}</h3>
                ))
            }
        </div>
    )
}

export default AddItem