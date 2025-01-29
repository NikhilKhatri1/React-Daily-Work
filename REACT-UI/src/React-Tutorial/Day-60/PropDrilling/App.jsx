import React from 'react'
import ChildA from './ChildA'

const App = () => {
    const person = {
        name: 'john',
        age: 22
    }
    return (
        <div>
            <h1>Prop Drilling</h1>
            <ChildA person={person} />
        </div>
    )
}

export default App