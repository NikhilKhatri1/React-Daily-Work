import React from 'react';

export function EventInReact() {
    function InsertClick(name, price, mode, event) {
        document.write(`
            Name:${name} <br>
            Price:${price} <br>
            Mode:${mode} <br>
            Button id:${event.target.id} <br>
            Class:${event.target.className}
            `)
    }
    return (
        <div>
            <button id="btnCLick" className="btn btn-primary m-4" onClick={(e) => InsertClick("SamsungTV", 20000, "Online", e)}>insert</button>
        </div>
    )
}