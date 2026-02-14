import React from 'react';

const TechMarquee = () => {
    const techs = ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Redis', 'TypeScript', 'Next.js', 'GraphQL', 'Tailwind', 'Python', 'Go'];

    return (
        <section className="marquee-container" style={{
            padding: '25px 0',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid var(--glass-border)',
            borderBottom: '1px solid var(--glass-border)',
            margin: '20px 0'
        }}>
            <div className="marquee-content">
                {techs.map((tech, i) => (
                    <span key={i} className="marquee-item">{tech}</span>
                ))}
                {techs.map((tech, i) => (
                    <span key={`dup-${i}`} className="marquee-item">{tech}</span>
                ))}
            </div>
        </section>
    );
};

export default TechMarquee;
