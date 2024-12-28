// Question 7

// Create a stopwatch application through which users can
// start, pause and reset the timer.
// Use React state,
// event handlers and the setTimeout or setInterval functions to manage the timer’s state and actions.

import React, { useState, useRef } from 'react';

const StopWatch = () => {
    const [count, setCount] = useState(0); // Store the time in seconds
    const [isRunning, setIsRunning] = useState(false); // Track whether the stopwatch is running
    const intervalId = useRef(null); // Use useRef to store the interval ID

    // Convert seconds to HH:MM:SS format using slice
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600); // Calculate hours
        const minutes = Math.floor((seconds % 3600) / 60); // Calculate minutes
        const remainingSeconds = seconds % 60; // Remaining seconds+

        // Convert hours, minutes, and seconds to strings and use slice for 2-digit formatting
        return [
            String(hours).slice(-2), // Get last 2 characters, ensures it's 2 digits for hours
            String(minutes).slice(-2), // Get last 2 characters for minutes
            String(remainingSeconds).slice(-2) // Get last 2 characters for seconds
        ].join(':');
    };

    // Start the stopwatch
    const start = () => {
        if (!isRunning) {
            intervalId.current = setInterval(() => {
                setCount(prevCount => prevCount + 1); // Increment count every second
            }, 1000);
            setIsRunning(true);
        }
    };

    // Pause the stopwatch
    const pause = () => {
        clearInterval(intervalId.current); // Stop the interval
        setIsRunning(false);
    };

    // Reset the stopwatch
    const reset = () => {
        clearInterval(intervalId.current); // Clear the interval
        setIsRunning(false); // Stop the timer
        setCount(0); // Reset the count to 0
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(count)}</p>
            <button className='btn btn-warning' onClick={start} disabled={isRunning}>Start</button>
            <button className='mx-2 btn btn-danger' onClick={pause} disabled={!isRunning}>Pause</button>
            <button className='btn btn-warning' onClick={reset}>Reset</button>
        </div>
    );
};

export default StopWatch;