import { useEffect } from 'react';
import { createConnection } from './Chat.jsx';

export function useChatRoom({ serverUrl, roomId }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };

    }, [roomId, serverUrl])
}