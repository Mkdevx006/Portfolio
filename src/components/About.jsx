import React from 'react';

const About = () => {
    const highlights = [
        { title: 'Fast Learner', desc: 'Quickly adapting to new technologies and frameworks.' },
        { title: 'Problem Solver', desc: 'Converting complex issues into efficient code solutions.' },
        { title: 'Detail Oriented', desc: 'Focusing on pixel-perfect UI and clean architecture.' },
        { title: 'Team Player', desc: 'Collaborating effectively to achieve project goals.' }
    ];

    return (
        <>
            <section id="about" className="container reveal" style={{ padding: 'var(--section-padding)' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '40px' }}>About Me</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div className="glass" style={{ padding: '40px', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '20px' }}>
                            I am a <span style={{ color: 'var(--accent-color)', fontWeight: '700' }}>Fullstack Developer</span> with a passion for building scalable web ecosystems. Currently pursuing my <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Diploma in Engineering</span>, I bridge the gap between academic theory and real-world production.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            I love turning complex problems into elegant, high-performance solutions that provide a seamless user experience. My focus is on writing clean, maintainable code using the <span style={{ color: '#61dafb', fontWeight: '700' }}>MERN</span> stack.
                        </p>
                        <p>
                            Driven by curiosity and a commitment to excellence, I am always evolving alongside the latest tech trends to deliver state-of-the-art results.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {highlights.map((h, i) => (
                            <div key={i} className="glass highlight-card stagger-item" style={{ padding: '25px', transitionDelay: `${i * 0.1}s` }}>
                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px', fontSize: '1.1rem' }}>{h.title}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;
