import React from 'react';

const Contact = ({ handleFormSubmit, formStatus }) => {
    return (
        <section id="contact" className="container reveal" style={{ padding: 'var(--section-padding)', textAlign: 'center' }}>
            <div className="glass" style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ marginBottom: '20px' }}>Contact Me</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.2rem' }}>
                    Have a project in mind or just want to say hi? Let's turn your ideas into production-ready reality.
                </p>

                {formStatus ? (
                    <div className="glass" style={{ padding: '40px', color: 'var(--accent-color)', fontWeight: '600', animation: 'fadeInUp 0.4s ease-out' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
                        {formStatus}
                    </div>
                ) : (
                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px', margin: '0 auto' }}>
                        <input type="hidden" name="title" value="New Portfolio Inquiry" />
                        <input type="text" name="name" required placeholder="Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '15px', borderRadius: '10px', color: 'inherit' }} />
                        <input type="email" name="reply_to" required placeholder="Email" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '15px', borderRadius: '10px', color: 'inherit' }} />
                        <textarea name="message" required placeholder="Message" rows="4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '15px', borderRadius: '10px', color: 'inherit' }}></textarea>
                        <button type="submit" className="btn-primary" style={{ border: 'none', cursor: 'pointer' }} disabled={formStatus === "Sending..."}>
                            {formStatus === "Sending..." ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
