import React, { useRef, useEffect } from 'react';

const ChatWidget = ({
    isChatOpen,
    setIsChatOpen,
    chatMessages,
    isAiTyping,
    userInput,
    setUserInput,
    handleChatAction,
    handleSendMessage
}) => {
    const chatMessagesRef = useRef(null);

    // Auto-scroll chat to bottom
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [chatMessages, isAiTyping]);

    return (
        <div className={`chat-widget ${isChatOpen ? 'active' : ''}`}>
            <div className="glass chat-window">
                <div className="chat-header">
                    <span className="online-indicator"></span>
                    <h3>Portfolio AI</h3>
                    <button className="chat-close" onClick={() => setIsChatOpen(false)}>×</button>
                </div>

                <div className="chat-messages" ref={chatMessagesRef}>
                    {chatMessages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isAiTyping && (
                        <div className="message bot typing">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    )}
                </div>

                <div className="chat-actions">
                    {[
                        { id: 'tech', label: '🛠️ Tech Stack' },
                        { id: 'projects', label: '📁 Best Projects' },
                        { id: 'resume', label: '📄 Resume/CV' },
                        { id: 'contact', label: '☕ Let\'s Talk' }
                    ].map(action => (
                        <button key={action.id} className="action-btn" onClick={() => handleChatAction(action)}>
                            {action.label}
                        </button>
                    ))}
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Or type here..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        disabled={isAiTyping}
                    />
                    <button
                        className="chat-send"
                        onClick={handleSendMessage}
                        disabled={isAiTyping || !userInput.trim()}
                    >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                    </button>
                </div>
            </div>

            <button className="chat-bubble" onClick={() => setIsChatOpen(!isChatOpen)}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
            </button>
        </div>
    );
};

export default ChatWidget;
