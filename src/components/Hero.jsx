import React from 'react';
import profileImg from '../assets/profile.jpeg';

const Hero = ({ displayText, roles }) => {
    return (
        <section id="home" className="hero-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '80px 20px' }}>
            <div className="container hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '60px' }}>
                <div className="hero-content" style={{ flex: 1, textAlign: 'center' }}>
                    <h2 className="fade-in-up" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        Hi, I'm <span style={{ color: 'var(--accent-color)', fontWeight: '800' }}>Mangalaram Prajapati</span>
                    </h2>
                    <h1 className="glow-text fade-in-up" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.1, marginBottom: '20px', minHeight: '1.2em' }}>
                        {displayText}<span className="cursor">|</span>
                    </h1>
                    <p className="fade-in-up" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px auto', animationDelay: '0.2s' }}>
                        Fullstack Developer specializing in scalable web ecosystems. <br />
                        Turning complex problems into elegant, production-ready solutions.
                    </p>
                    <div className="fade-in-up" style={{ display: 'flex', gap: '20px', justifyContent: 'center', animationDelay: '0.4s', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn-primary">Explore Projects</a>
                        <a href="#" className="btn-cv-glow" style={{ textDecoration: 'none' }} download="Mangalaram_Resume.pdf">
                            <span className="btn-cv-content">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download CV
                            </span>
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="profile-frame">
                        <img
                            src={profileImg}
                            alt="Mangalaram Prajapati"
                            className="profile-photo"
                        />
                        <div className="photo-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
