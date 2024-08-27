import { useState } from "react";
import axios from 'axios';
import React from "react";
export function KeyDemo() {
    const [error, seterror] = useState('');
    const [validClass, setvalidClass] = useState('');
    const [styleObj, setstyleObj] = useState({ width: '' });
    const [progressColor, setprogressColor] = useState('');
    const [msg, setmsg] = useState('');

    function verifyUserId(e) {
        axios.get("users.json")
            .then(response => {
                var user = response.data.find(item => item.UserId === e.target.value);
                if (user) {
                    if (user.UserId === e.target.value) {
                        seterror('User Id Taken - Try Another');
                        setvalidClass('text-danger');
                    }
                } else {
                    seterror('User Id Available');
                    setvalidClass('text-success');
                }
            })
    }
    function verifyPass(e) {
        if (e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
            setprogressColor('bg-success');
            setstyleObj({ width: '100%' });
            setmsg('Strong');
        }
        else {
            if (e.target.value.length < 4) {
                setprogressColor('bg-danger');
                setstyleObj({ width: '20%' });
                setmsg('Poor');
            }
            else {
                setprogressColor('bg-warning');
                setstyleObj({ width: '70%' });
                setmsg('Weak');
            }
        }
    }

    return (
        <div className="container-fluid">
            <h2>Register user</h2>
            <dl className="w-25">
                <dt>Username:</dt>
                <dd><input type="text" className="form-control" onKeyUp={verifyUserId} /></dd>
                <dd className={validClass}>{error}</dd>
                <dt>Password</dt>
                <dd><input type="text" className="form-control" onKeyUp={verifyPass} /></dd>
                <dd>
                    <div className="progress">
                        <div style={styleObj} className={`progress-bar progress-bar-animated progress-bar-striped ${progressColor}`}>{msg}</div>
                    </div>
                </dd>
            </dl>

        </div>
    )
}