import React from 'react'

const User = (props) => {
    if (props.loggedIn && props.Admin) {
        return (
            <h1>Welcome Admin 1:49</h1>
        )
    }
    else {
        return (
            <h1>Welcome User</h1>
        )
    }
}

export default User