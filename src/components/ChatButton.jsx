import React, { useState } from 'react';
import '../styles/App.css';

const ChatButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleChatClick = () => {
    alert('Connecting to our support team...');
    // In a real application, you would connect to your chat service here
    // For example: Tawk_API.toggle();
  };

  if (!isVisible) return null;

  return (
    <button className="chat-button" id="chatButton" onClick={handleChatClick}>
      <i className="fas fa-comment-dots"></i>
      <span className="badge">1</span>
    </button>
  );
};

export default ChatButton;