import React from 'react'

import User from './User'
// import Weather from './Weather'

const NewApp = () => {
    return (
        <div>
            {/* <Weather /> */}

            <User loggedIn={true} Admin={false} />

        </div>
    )
}

export default NewApp