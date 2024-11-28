import React from 'react'
import Greeting from './Greeting'

const ConditionalRendering = () => {
    return (
        <div>
            <h1>ConditionalRendering</h1>
            <Greeting isLoggedIn={true} />
        </div>
    )
}

export default ConditionalRendering