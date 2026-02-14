import React from 'react';

const Navbar = ({
    activeSection,
    isDarkMode,
    toggleTheme,
    isMenuOpen,
    toggleMenu,
    scrollProgress
}) => {
    return (
        <>
            <nav className="glass" style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1200px',
                padding: '15px 30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
                background: 'rgba(255, 255, 255, 0.01)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
                <div className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                    My Portfolio
                </div>

                <ul className="desktop-nav" style={{ display: 'flex', gap: '30px', fontWeight: '600', alignItems: 'center' }}>
                    <li><a href="#home" className={`magnetic ${activeSection === 'home' ? 'active-link' : ''}`}>Home</a></li>
                    <li><a href="#about" className={`magnetic ${activeSection === 'about' ? 'active-link' : ''}`}>About</a></li>
                    <li><a href="#skills" className={`magnetic ${activeSection === 'skills' ? 'active-link' : ''}`}>Technical</a></li>
                    <li><a href="#projects" className={`magnetic ${activeSection === 'projects' ? 'active-link' : ''}`}>Projects</a></li>
                    <li>
                        <button
                            onClick={toggleTheme}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'var(--text-primary)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(15deg)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? (
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            )}
                        </button>
                    </li>
                    <li>
                        <a href="#contact" className="btn-primary magnetic contact-nav-btn" style={{
                            padding: '8px 20px',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            minWidth: '120px'
                        }}>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <span>Contact Us</span>
                        </a>
                    </li>
                </ul>

                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '3px',
                    background: 'var(--gradient-vibrant)',
                    width: `${scrollProgress}%`,
                    transition: 'width 0.1s ease-out'
                }}></div>
            </nav>

            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-nav">
                    <li><a href="#home" onClick={toggleMenu} className={activeSection === 'home' ? 'active-link' : ''}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu} className={activeSection === 'about' ? 'active-link' : ''}>About</a></li>
                    <li><a href="#skills" onClick={toggleMenu} className={activeSection === 'skills' ? 'active-link' : ''}>Technical</a></li>
                    <li><a href="#projects" onClick={toggleMenu} className={activeSection === 'projects' ? 'active-link' : ''}>Projects</a></li>
                    <li>
                        <button
                            onClick={() => { toggleTheme(); toggleMenu(); }}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                color: 'var(--text-primary)',
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                fontFamily: 'var(--font-heading)'
                            }}
                        >
                            {isDarkMode ? (
                                <>
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                    Light Mode
                                </>
                            ) : (
                                <>
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                    Dark Mode
                                </>
                            )}
                        </button>
                    </li>
                    <li><a href="#contact" onClick={toggleMenu} className="btn-primary">Contact Us</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
