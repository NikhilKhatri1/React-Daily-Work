import React from 'react'
import './SpotlightSection.css'
const SpotLightSection = () => {
    return (
        <div className="spotlight-section">
            <div className="spotlight-header">
                <h2>#8 Spotlight</h2>
            </div>

            <div className="spotlight-card">
                <div className="spotlight-content">
                    <h3>Demon Slayer: Kimetsu no Yaibo Hashira Training Arc</h3>

                    <div className="metadata">
                        <span>TV</span>
                        <span>24m</span>
                        <span>May 12, 2024</span>
                    </div>

                    <p className="description">
                        Adaptation of the Hashira Training Arc. The Hashira, the Demon Slayer Corps'
                        highest ranking swordsmen and members. The Hashira Training has begun in order
                        to face the forthcoming battle against Muzan Kibutsuj...
                    </p>

                    <div className="action-buttons">
                        <button className="watch-now">Watch Now</button>
                        <button className="details">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpotLightSection