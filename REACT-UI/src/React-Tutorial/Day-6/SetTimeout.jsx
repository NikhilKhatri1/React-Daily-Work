import React, { useRef, useState } from "react";
export function Setinterval() {
    const [msg, setmsg] = useState('');
    const msgref = useRef(null);
    function displayMsg1() {
        setmsg("Hello!");
    }
    function displayMsg2() {
        setmsg("Hello World!");
    }
    function HandleDisplay() {
        setTimeout(displayMsg1, 2000);
        msgref.current = setTimeout(displayMsg2, 4000);
    }
    function HandleCancel() {
        clearTimeout(msgref.current);
        setmsg("Message Cancelled");
    }

    return (
        <div className="container-fluid">
            <button className="btn btn-primary m-2" onClick={HandleDisplay}>Display message</button>
            <button className="btn btn-danger m-2" onClick={HandleCancel}>Cancel Meassage</button>
            <p className="text-center mt-4">{msg}</p>
        </div>
    )
}

