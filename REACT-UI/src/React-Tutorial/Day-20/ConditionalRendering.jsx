import React, { useState } from 'react'

export function ConditionalRendering() {
    const [signedIn, setSignIn] = useState(false);

    function HandleSignOut() {
        setSignIn(true);
    }
    function HandleSignIn() {
        setSignIn(false)
    }

    return (
        <div>
            <nav className='d-flex justify-content-between m-2 p-2'>
                <div className='fs-4'>
                    <p>BrandName</p>
                </div>
                {
                    (signedIn === true) ? <div className='fs-4 fw-bold'>
                        <span className='ms-3'>Home</span>
                        <span className='ms-3'>Home</span>
                        <span className='ms-3'>Home</span>
                        <span className='ms-3'>Home</span>
                    </div>
                        : <div></div>
                }
                <div>
                    {
                        (signedIn === true) ? <button className='btn btn-danger' onClick={HandleSignIn}>Sign Out</button>
                            : <button className='btn btn-primary' onClick={HandleSignOut}>Sign In</button>
                    }
                </div>
            </nav>
        </div>
    )
}

export default ConditionalRendering