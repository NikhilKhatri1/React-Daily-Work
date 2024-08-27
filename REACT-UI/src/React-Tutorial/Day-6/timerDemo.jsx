import React from "react";
import { useState, useRef } from "react";
export function TimerDemo() {
    const [message, setmessage] = useState('');
    let thread2 = useRef(null);

    function msg1() {
        setmessage("Hello!");
    }
    function msg2() {
        setmessage("Hi! John");
    }
    function msg3() {
        setmessage("Welcome!");
    }

    function HandleDelay() {
        setTimeout(msg1, 1000);
        thread2.current = setTimeout(msg2, 3000);
        setTimeout(msg3, 6000);
    }
    function HandleCancel() {
        clearTimeout(thread2.current);
    }

    return (
        <div className="container-fluid">
            <button className="btn btn-primary m-2" onClick={HandleDelay}>Display Message</button>
            <button className="btn btn-danger m-2" onClick={HandleCancel}>Cancel Message</button>
            <p className="fs-4 text-center">{message}</p>
        </div>
    )
}