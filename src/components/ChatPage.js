// ChatPage.js
import React, { useState } from 'react';
import './ChatPage.css';  // For styling the chat

const ChatPage = () => {
  // Sample users and message data
  const [messages, setMessages] = useState([
    { user: 'User1', text: 'Hello, how are you?' },
    { user: 'User2', text: 'I am good, thanks! How about you?' },
  ]);

  const [message, setMessage] = useState('');  // For storing the current input message

  // Handle sending a new message
  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { user: 'User1', text: message }]);  // Simulate User1 sending message
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat with User2</h1>
      
      {/* Display chat messages */}
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.user === 'User1' ? 'user1' : 'user2'}`}>
            <strong>{msg.user}: </strong><span>{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Input and Send button */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
