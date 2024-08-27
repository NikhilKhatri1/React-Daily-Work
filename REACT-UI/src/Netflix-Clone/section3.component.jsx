import React from 'react';
import './Netflix.component.css';

export function DownloadComponent() {
    return (
        <div className="content">
            <div className="container2 d-flex">
                <div className="col1 d-flex">
                    <img src="mobile.jpg" alt="tv" width={502.5} height={374} />
                    <div className="iconImg row">
                        <div className="col-3">
                            <img className="boxShot" src="boxshot.png" alt="" width={70} height={90} />
                        </div>
                        <div className="col-6 d">
                            <p className="text-white fw-semibold">Stranger Things</p>
                            <p className="text-primary">Downloading...</p>
                        </div>
                        <div className="col-3">
                            <img className="gif" src="download-icon.gif" alt="" width={50} height={50} />
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <p className='h1 text-white'>Download your shows to watch offline</p>
                    <p className='p p1'>Save your favourites easily and always have</p>
                    <p className='p p2'>something to watch.</p>
                </div>
            </div>
        </div>
    );
}
