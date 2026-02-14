import React from 'react';

const Skills = ({ skills }) => {
    return (
        <>
            <section id="skills" className="container reveal" style={{ padding: 'var(--section-padding)' }}>
                <h2 style={{ marginBottom: '40px' }}>Technical</h2>
                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <div key={i} className="glass skill-card stagger-item" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <span className="skill-icon">{skill.icon}</span>
                            <h3 style={{ fontSize: '1.1rem' }}>{skill.name}</h3>
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
