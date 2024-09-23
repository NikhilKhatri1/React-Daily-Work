import React from 'react'

function Button({ handleClick, children }) {
    console.log('Rendering Button - ', children)
    return (
        <div>
            <button
                onClick={handleClick}
                className='btn btn-primary'
            >
                {children}
            </button>
        </div>
    )
}

export default React.memo(Button)