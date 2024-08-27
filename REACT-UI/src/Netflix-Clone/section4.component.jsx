import "./Netflix.component.css"
import React from 'react';

export function Watch() {
    return (
        <div className="content mobile-container">
            <div className="container1 c1 d-flex">
                <div className="column1">
                    <p className='heading1'>Enjoy on your TV</p>
                    <p className='p'>Watch on smart TVs, PlayStation, Xbox,</p>
                    <p className='p'>Chromecast, Apple TV, Blu-ray players and</p>
                    <p className='p'>more.</p>
                </div>
                <div className="column2 d-flex mt-5">
                    <img id="img" src="Device.png" alt="tv" width={502.5} height={374} />
                    <video autoPlay loop muted playsInline className="v1">
                        <source src="video-devices-in.m4v" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}