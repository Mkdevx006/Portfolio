import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '100px', color: 'var(--text-secondary)' }}>
            <p>&copy; {new Date().getFullYear()} Mangalaram Prajapati | Crafted with Passion</p>
        </footer>
    );
};

export default Footer;
