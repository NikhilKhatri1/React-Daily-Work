import React, { useRef, useState } from 'react'

export function UseRef() {
    const [msg, setMsg] = useState('');
    const thread = useRef(null);

    function msg1() {
        setMsg("Hello!");
    }
    function msg2() {
        setMsg("How are you!");
    }
    function msg3() {
        setMsg("Welcome!")
    }

    function HandleStartClick() {
        setTimeout(msg1, 3000);
        thread.current = setTimeout(msg2, 6000);
        setTimeout(msg3, 9000);
    }

    function HandleCancelClick() {
        clearTimeout(thread.current)
    }
    return (
        <div className='container-fluid'>

            <h1>Use Ref Hook</h1>

            <h2>Message : {msg} </h2>

            <button className='btn btn-primary' onClick={HandleStartClick}>Start</button>
            <button className='btn btn-danger ms-2' onClick={HandleCancelClick}>Cancel</button>
        </div>
    )
}

export default UseRef