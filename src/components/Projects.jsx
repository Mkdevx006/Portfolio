import React from 'react';
import TiltCard from './common/TiltCard';

const Projects = ({ projectsData, setSelectedProject, selectedProject }) => {
    return (
        <>
            <section id="projects" className="container reveal" style={{ padding: 'var(--section-padding)' }}>
                <h2 style={{ marginBottom: '40px' }}>Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((p, i) => (
                        <TiltCard key={i}>
                            <div className="glass project-card-hover stagger-item card-glow-container"
                                style={{ overflow: 'hidden', height: '100%', transition: 'var(--transition)', transitionDelay: `${i * 0.2}s` }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-shimmer"></div>
                                <div className="project-image-view" style={{ height: '200px', background: `url(${p.img}) center/cover`, transition: 'transform 0.5s ease' }}></div>
                                <div style={{ padding: '30px' }}>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                                        {p.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className={`badge badge-${tag.toLowerCase()}`}>{tag}</span>
                                        ))}
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{p.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', fontSize: '0.95rem' }}>{p.desc}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <button
                                            onClick={() => setSelectedProject(p)}
                                            style={{ background: 'none', border: 'none', fontWeight: '600', color: 'var(--accent-color)', cursor: 'pointer', padding: 0 }}
                                        >
                                            Details →
                                        </button>
                                        <div style={{ display: 'flex', gap: '15px' }}>
                                            <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }} title="View Source">
                                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.523-4.48-10-10-10z" /></svg>
                                            </a>
                                            <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }} title="Live Demo">
                                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h5v2H5v12h12v-5h2v7H3V5h2z" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </section>

            {selectedProject && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="glass modal-content-view"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '2rem',
                                lineHeight: '1',
                                cursor: 'pointer',
                                transition: 'var(--transition)',
                                zIndex: 10,
                                opacity: 0.7
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <div className="modal-image" style={{ background: `url(${selectedProject.img}) center/cover` }}></div>
                        <h2 className="modal-title">{selectedProject.title}</h2>
                        <p style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '20px' }}>{selectedProject.tech}</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px' }}>
                            {selectedProject.desc} Detailed documentation including system architecture and development logs.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary">View Project</a>
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '12px 28px', border: '1px solid var(--glass-border)', borderRadius: '30px', fontWeight: '600' }}>GitHub Repo</a>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};

export default Projects;
