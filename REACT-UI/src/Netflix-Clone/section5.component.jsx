import "./Netflix.component.css"
import React from 'react';

export function Kids() {
    return (
        <div className="content">
            <div className="container5 d-flex">
                <div className="col1 d-flex">
                    <img src="Children.png" alt="tv" width={502.5} height={374} />
                </div>
                <div className="col2">
                    <p className='h1 text-white'>Create profiles for kids</p>
                    <p className='p p1'>Send children on adventures with their</p>
                    <p className='p p2'>favourite characters in a space made just for</p>
                    <p className="p p2">them—free with your membership.</p>
                </div>
            </div>
        </div>
    )
}