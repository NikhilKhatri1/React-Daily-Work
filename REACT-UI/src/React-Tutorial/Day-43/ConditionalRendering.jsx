import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [isLogin, SetIsLogin] = useState(true);

    return (
        <div>
            <h1>ConditionalRendering</h1>
            {
                isLogin ? <h4>Welcome User!</h4> : <h4>Login In</h4>
            }
        </div>
    )
}

export default ConditionalRendering