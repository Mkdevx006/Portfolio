import React from 'react';

const ScrollButtons = ({ showScrollButtons, isNearBottom, handleSmartScroll }) => {
    if (!showScrollButtons) return null;

    return (
        <div className={`scroll-buttons active`} style={{ display: 'flex' }}>
            <button
                className={`scroll-btn ${isNearBottom ? 'scroll-up' : 'scroll-bottom'}`}
                onClick={handleSmartScroll}
                title={isNearBottom ? 'Scroll to Top' : 'Scroll to Bottom'}
            >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    {isNearBottom ? (
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                    ) : (
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    )}
                </svg>
            </button>
        </div>
    );
};

export default ScrollButtons;
