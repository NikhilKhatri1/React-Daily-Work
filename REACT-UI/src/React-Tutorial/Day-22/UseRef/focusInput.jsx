import React, { useEffect, useRef } from 'react'

function FocusInput() {
    const inputRef = useRef(null)
    useEffect(() => {
        // Focus the input
        inputRef.current.focus()
        console.log(inputRef.current.className);
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default FocusInput