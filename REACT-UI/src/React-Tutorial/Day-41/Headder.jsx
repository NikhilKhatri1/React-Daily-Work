import React from "react";

function Menus() {
    return (
        <div>This is Menu</div>
    )
}

export default function Headder() {
    return (
        <div>
            <h1>This is Header</h1>
            <Menus />
        </div>
    )
}