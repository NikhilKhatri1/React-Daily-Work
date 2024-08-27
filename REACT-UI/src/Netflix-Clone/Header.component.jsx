import "./Netflix.component.css"
import React from 'react';


export function HeaderComponent() {
    return (
        <header className="mx-lg-5 px-lg-5 py-lg-4 mx-3 py-3">
            <nav className="nav">
                <div className="Brand-logo text-danger fs-1 fw-bold">Netflix</div>
                <div className="btn-icon">
                    <select id="lang-categories">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                    <a href="index.js" className="btn btn-danger btn-sm ms-3 fw-semibold">Sign up</a>
                </div>
            </nav>
        </header >
    )
}