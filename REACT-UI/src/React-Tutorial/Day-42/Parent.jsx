import React from 'react'
import ChildComponent from './ChildComponent.jsx'


const Parent = () => {
    return (
        <div>
            <h1>Parent component</h1>
            <ChildComponent>
                <p>This will render on child component</p>
            </ChildComponent>
            <ChildComponent>
                <p>This will render the paragraph and button</p>
                <button className='btn btn-primary'>Click me</button>
            </ChildComponent>
        </div>
    )
}

export default Parent