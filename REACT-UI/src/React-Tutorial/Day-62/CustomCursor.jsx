import React, { useState, useEffect } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    useEffect(() => {
        const updateFollower = () => {
            setTrailingPos(prev => ({
                x: prev.x + (position.x - prev.x) * 0.2,
                y: prev.y + (position.y - prev.y) * 0.2
            }));
        };
        const animationFrame = requestAnimationFrame(updateFollower);
        return () => cancelAnimationFrame(animationFrame);
    }, [position]);

    return (
        <>
            <div
                className="fixed w-6 h-6 bg-black rounded-full pointer-events-none 
                   transform -translate-x-1/2 -translate-y-1/2 z-[9999] 
                   mix-blend-difference" // Enhanced visibility technique
                style={{ left: position.x, top: position.y }}
            />

            <div
                className="fixed w-6 h-6 bg-sky-400 rounded-full pointer-events-none 
                  transform -translate-x-1/2 -translate-y-1/2 z-[9998]
                  transition-all duration-75"
                style={{
                    left: trailingPos.x,
                    top: trailingPos.y,
                    scale: 0.8
                }}
            />
        </>
    );
};

export default CustomCursor;