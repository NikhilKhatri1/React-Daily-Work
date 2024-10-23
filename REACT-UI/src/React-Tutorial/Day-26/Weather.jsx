import React from 'react'

const Weather = () => {
    const Temp = 26;
    if (Temp < 15) {
        return (
            <h1>It's Cold Outside.</h1>
        )
    }
    else if (Temp >= 15 && Temp <= 25) {
        return (
            <h1>It's Nice Outside</h1>
        )
    }
    else if (Temp > 25) {
        return (
            <h1>It's Hot Outside</h1>
        )
    }
}

export default Weather