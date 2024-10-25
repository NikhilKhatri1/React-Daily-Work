import React from 'react'
// import { createPortal } from 'react-dom'
const CopyClipboard = ({ copied }) => {

    return /*createPortal*/(
        <div>
            {copied && (
                <div style={{ position: 'absolute', bottom: '3rem' }}>
                    Copy to clipboard
                </div>
            )}
        </div>// ,
        // document.querySelector("#CopyClipboard");
    )
}

export default CopyClipboard