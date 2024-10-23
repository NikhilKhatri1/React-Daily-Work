import React from 'react'

const ConditionalRendering = () => {
    const ValidPassword = () => <h1>Valid Password</h1>;
    const InValidPassword = () => <h1>Invalid Password</h1>;

    const Password = ({ isValid }) => {
        // if (isValid) {
        //     return <ValidPassword />
        // }
        // return <InValidPassword />
        return isValid ? <ValidPassword /> : <InValidPassword />;
    }
    return (
        <div>
            <Password isValid={false} />
        </div>
    )
}

export default ConditionalRendering