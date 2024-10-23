import React from 'react'

const User = (props) => {
    if (props.loggedIn && props.Admin) {
        return (
            <h1>Welcome Admin</h1>
        )
    }
    else {
        return (
            <h1>Welcome User</h1>
        )
    }
}

export default User