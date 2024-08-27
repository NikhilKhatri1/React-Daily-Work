import { useState } from "react";
import React from "react";
import axios from "axios";

export function Key() {
    const [error, seterror] = useState('');
    const [color, setcolor] = useState('');
    const [styleObj, setstyleObj] = useState({ width: '' });
    const [msg, setmsg] = useState('');
    const [progressColor, setprogressColor] = useState('');

    function VerifyUserId(e) {
        axios.get("users.json")
            .then(response => {
                var user = response.data.find(item => item.UserId === e.target.value);
                if (user) {
                    seterror("Username is Taken");
                    setcolor("text-danger");
                }
                else {
                    seterror("username is Available");
                    setcolor("text-success");
                }
            })
    }

    function VerifyPass(e) {
        if (e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
            setstyleObj({ width: '100%' });
            setprogressColor('bg-success');
            setmsg('Strong');
        }
        else {
            if (e.target.value.length < 4) {
                setstyleObj({ width: '20%' });
                setprogressColor('bg-danger');
                setmsg('Poor');
            } else {
                setstyleObj({ width: '70%' });
                setprogressColor('bg-warning');
                setmsg('Weak');
            }
        }
    }

    return (
        <div className="container-fluid">
            <dl className="w-25">
                <dt>User Name:</dt>
                <dd><input type="text" onKeyUp={VerifyUserId} className="form-control" /></dd>
                <dd className={color}>{error}</dd>
                <dt>Password:</dt>
                <dd><input type="text" onKeyUp={VerifyPass} className="form-control" /></dd>
                <dd>
                    <div className="progress">
                        <div style={styleObj} className={`progress-bar progress-bar-animated progress-bar-striped ${progressColor}`}>{msg}</div>
                    </div>
                </dd>
            </dl>
        </div>
    )
}