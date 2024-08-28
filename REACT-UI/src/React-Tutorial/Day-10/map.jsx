import React, { useState, useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

// Map component
function Map({ zoomLevel }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const map = L.map(containerRef.current, {
            zoomControl: false,
            doubleClickZoom: false,
            boxZoom: false,
            keyboard: false,
            scrollWheelZoom: false,
            zoomAnimation: false,
            touchZoom: false,
            zoomSnap: 0.1
        });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        map.setView([0, 0], zoomLevel);

        // Cleanup function to remove the map when the component is unmounted or zoomLevel changes
        return () => {
            map.remove();
        };
    }, [zoomLevel]);

    return (
        <div
            style={{ width: 200, height: 200 }}
            ref={containerRef}
        />
    );
}

// App component
export default function App() {
    const [zoomLevel, setZoomLevel] = useState(0);

    return (
        <>
            Zoom level: {zoomLevel}x
            <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
            <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
            <hr />
            <Map zoomLevel={zoomLevel} />
        </>
    );
}
