import './Netflix.component.css'
import React from 'react';

export function EntertainmentComponent() {
    return (
        <div className="content">
            <div className="container1 d-flex">
                <div className="column1">
                    <p className='heading1'>Enjoy on your TV</p>
                    <p className='p'>Watch on smart TVs, PlayStation, Xbox,</p>
                    <p className='p'>Chromecast, Apple TV, Blu-ray players and</p>
                    <p className='p'>more.</p>
                </div>
                <div className="column2 d-flex">
                    <img id="img" src="tv.png" alt="tv" width={502.5} height={374} />
                    <video autoPlay loop muted playsInline>
                        <source src="tv.m4v" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}