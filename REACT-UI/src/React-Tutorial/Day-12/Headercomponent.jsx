import React from 'react'
const Headercomponent = () => {
    console.log("Header Component render");
    return (
        <div>Headercomponent</div>
    )
}

export default React.memo(Headercomponent);