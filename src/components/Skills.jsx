import React from 'react';

const Skills = ({ skills }) => {
    return (
        <>
            <section id="skills" className="container reveal" style={{ padding: 'var(--section-padding)' }}>
                <h2 style={{ marginBottom: '40px' }}>Technical</h2>

                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="glass skill-card stagger-item"
                            style={{
                                transitionDelay: `${i * 0.1}s`,
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                                const img = e.currentTarget.querySelector('.skill-icon-img');
                                const glare = e.currentTarget.querySelector('.glare-effect');
                                if (img) {
                                    img.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale(1.15)';
                                    img.style.animationPlayState = 'paused';
                                }
                                if (glare) {
                                    glare.style.top = '150%';
                                    glare.style.left = '150%';
                                }
                            }}
                            onMouseOut={(e) => {
                                const img = e.currentTarget.querySelector('.skill-icon-img');
                                const glare = e.currentTarget.querySelector('.glare-effect');
                                if (img) {
                                    img.style.transform = 'perspective(500px) rotateX(5deg) rotateY(-5deg) scale(1.05)';
                                    img.style.animationPlayState = 'running';
                                }
                                if (glare) {
                                    glare.style.top = '-150%';
                                    glare.style.left = '-150%';
                                }
                            }}
                        >
                            <div className="glare-effect" style={{
                                position: 'absolute',
                                top: '-150%',
                                left: '-150%',
                                width: '300%',
                                height: '300%',
                                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)',
                                transform: 'rotate(45deg)',
                                transition: '0.6s',
                                pointerEvents: 'none',
                                zIndex: 1
                            }} />

                            {skill.icon.startsWith('http') ? (
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="skill-icon-img"
                                    style={{
                                        width: '65px',
                                        height: '65px',
                                        marginBottom: '15px',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.2))',
                                        transform: 'perspective(500px) rotateX(5deg) rotateY(-5deg) scale(1.05)',
                                        transition: 'transform 0.3s ease',
                                        willChange: 'transform',
                                        backfaceVisibility: 'hidden',
                                        animation: `float 6s ease-in-out infinite ${i * 0.2}s`,
                                        position: 'relative',
                                        zIndex: 2
                                    }}
                                />
                            ) : (
                                <span className="skill-icon">{skill.icon}</span>
                            )}
                            <h3 style={{ fontSize: '1.1rem', position: 'relative', zIndex: 2 }}>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section id="metrics" className="container reveal" style={{ padding: '40px 20px', textAlign: 'center' }}>
                <div className="glass metrics-ticker" style={{ padding: '30px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px' }}>
                    <div className="metric stagger-item">
                        <span className="metric-value">100%</span>
                        <span className="metric-label">Logic Accuracy</span>
                    </div>
                    <div className="metric stagger-item">
                        <span className="metric-value">&lt; 200ms</span>
                        <span className="metric-label">Build Optimization</span>
                    </div>
                    <div className="metric stagger-item">
                        <span className="metric-value">99.9%</span>
                        <span className="metric-label">Code Reliability</span>
                    </div>
                    <div className="metric stagger-item">
                        <span className="metric-value">0</span>
                        <span className="metric-label">Architectural Debt</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
