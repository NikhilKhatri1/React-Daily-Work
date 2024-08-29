import { useState } from "react";
import { useChatRoom } from "./UseChatRoom.jsx";

function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useChatRoom({
        roomId: roomId,
        serverUrl: serverUrl
    });

    return (
        <div>
            <label>
                Server URL:{' '}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                    className="form-control"
                />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </div>
    );
}

export function App() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    return (
        <div className="m-4" style={{ height: "40px" }}>
            <label className="d-flex w-25" >
                <p className="d-flex" style={{ width: "550px", marginTop: "6px" }}>Choose the chat room:{' '}</p>
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                    className="form-select"
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button
                className="btn btn-primary ms-2"
                onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>

            {show && <hr />}
            <br />
            {show && <ChatRoom roomId={roomId} />}
        </div>
    );
}
