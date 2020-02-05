import React from 'react';
import Particles from 'react-particles-js';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-page-background">
                <Particles
                    className="particle-js"
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                />
            </div>
            <div className="landing-page-content">
                <h1>Karan Mittal</h1>
            </div>
        </div>
    );
};

export default LandingPage;