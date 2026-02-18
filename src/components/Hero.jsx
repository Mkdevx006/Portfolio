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
                    <h1 className="glow-text fade-in-up" style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', lineHeight: 1.4, marginBottom: '30px', minHeight: '2.8em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

                    <div className="fade-in-up" style={{ display: 'flex', gap: '25px', justifyContent: 'center', marginTop: '30px', animationDelay: '0.6s' }}>
                        <a href="https://github.com/Mkdevx006" target="_blank" rel="noopener noreferrer" className="magnetic social-hero-icon" style={{
                            color: 'var(--text-primary)',
                            opacity: 0.8,
                            transition: 'all 0.3s ease',
                            padding: '10px',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '50%',
                            display: 'flex',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }} title="GitHub">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/mangal-prajapati-785a15294" target="_blank" rel="noopener noreferrer" className="magnetic social-hero-icon" style={{
                            color: '#0077b5',
                            opacity: 0.8,
                            transition: 'all 0.3s ease',
                            padding: '10px',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '50%',
                            display: 'flex',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }} title="LinkedIn">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-1.8.7-2.1 1.2v-1h-2.5v7.8h2.5v-4.1c0-1.1.9-2 2-2a2 2 0 0 1 2 2v4.1h2.8M6.5 18.5h2.5V10.7H6.5v7.8M8.3 8.2a1.5 1.5 0 1 0-1.5-1.5 1.5 1.5 0 0 0 1.5 1.5z" />
                            </svg>
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
