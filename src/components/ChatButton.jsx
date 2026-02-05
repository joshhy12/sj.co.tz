import React, { useState, useEffect } from 'react';
import { FaComment, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import '../styles/ChatButton.css';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const initialGreeting = {
    id: 1,
    text: "Hello! 👋 I'm SJ Assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const quickQuestions = [
    "Tell me about your services",
    "Request a quote",
    "Schedule a consultation",
    "View portfolio"
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([initialGreeting]);
      }, 500);
    }
  }, [isOpen]);

  const handleSendMessage = (text, sender = 'user') => {
    if (!text.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text,
      sender,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate bot response
    if (sender === 'user') {
      setIsTyping(true);
      setTimeout(() => {
        const responses = [
          "Thanks for your message! Our team will get back to you shortly.",
          "Great question! Our custom software solutions can be tailored to your specific needs.",
          "I'd be happy to connect you with our sales team for a detailed quote.",
          "You can view our portfolio in the Projects section above!",
          "Our typical response time is within 24 hours. Would you like to schedule a call?"
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        handleSendMessage(randomResponse, 'bot');
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  const handleContactClick = (type) => {
    if (type === 'email') {
      window.location.href = 'mailto:info@sjsoftwares.com';
    } else if (type === 'phone') {
      window.location.href = 'tel:+15551234567';
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className={`chat-toggle ${isOpen ? 'open' : ''} glass`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <FaTimes /> : <FaComment />}
        <span className="chat-notification"></span>
      </button>

      {/* Chat Widget */}
      <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
        {/* Chat Header */}
        <div className="chat-header glass">
          <div className="chat-header-content">
            <div className="chat-avatar">
              <FaRobot />
            </div>
            <div className="chat-header-info">
              <h3>SJ Assistant</h3>
              <p className="chat-status">
                {isTyping ? 'Typing...' : 'Online'}
                <span className={`status-dot ${isTyping ? 'typing' : 'online'}`}></span>
              </p>
            </div>
          </div>
          <button 
            className="chat-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <FaTimes />
          </button>
        </div>

        {/* Chat Body */}
        <div className="chat-body">
          {/* Messages Container */}
          <div className="messages-container">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender}`}
              >
                <div className="message-bubble glass">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">{message.timestamp}</div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div className="quick-questions">
            <p className="quick-questions-label">Quick options:</p>
            <div className="questions-grid">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="quick-question glass"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Footer */}
        <div className="chat-footer glass">
          <div className="contact-options">
            <button 
              className="contact-option"
              onClick={() => handleContactClick('email')}
            >
              <MdEmail />
              <span>Email</span>
            </button>
            <button 
              className="contact-option"
              onClick={() => handleContactClick('phone')}
            >
              <MdPhone />
              <span>Call</span>
            </button>
          </div>

          <div className="message-input-container">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
              placeholder="Type your message..."
              className="message-input"
            />
            <button 
              className="send-button"
              onClick={() => handleSendMessage(inputMessage)}
              disabled={!inputMessage.trim()}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatButton;