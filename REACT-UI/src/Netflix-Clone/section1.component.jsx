import "./Netflix.component.css"
import React from 'react';

export function MainSectionComponent() {
    return (
        <div className="section-container text-center text-white">
            <div className="Heading-container">
                <h1 className="heading">
                    Unlimited movies, TV shows and more
                </h1>
            </div>
            <div className="SubHeading-container">
                <p>Watch anywhere. Cancel anytime.</p>
            </div>
            <div className="Membership">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="email-container">
                <form action="#" className="d-flex">
                    <input type="email" placeholder="Email address" className="int form-control me-2" />
                    <button className="get btn fs-4 fw-semibold">Get Started <span className="bi bi-chevron-right"></span> </button>
                </form>
            </div>
        </div>
    )
}