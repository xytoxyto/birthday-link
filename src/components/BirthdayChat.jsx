'use client';

import { useState, useRef, useEffect } from 'react';
import TierBadge from './TierBadge';

// Message component
function ChatMessage({ message, isOwnMessage }) {
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={[
        'rounded-xl px-5 py-3 shadow-lg max-w-xs',
        isOwnMessage
          ? 'bg-primary/90 text-white border-2 border-accent/40 brand-glow'
          : 'bg-white/40 text-foreground border-2 border-primary/10',
        'backdrop-blur'
      ].join(' ')}>
        {message.content}
      </div>
    </div>
  );
}

export default function BirthdayChat({ tier = "Galaxy", eventId }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alex', content: "Hey everyone! Excited for Saturday? 🎉", isOwnMessage: true },
    { id: 2, sender: 'Jordan', content: "Can't wait for Saturday! 🥳", isOwnMessage: false },
    { id: 3, sender: 'Alex', content: "Me too! Bringing cupcakes. 🧁", isOwnMessage: true },
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add new message to chat
    setMessages([
      ...messages, 
      { 
        id: Date.now(), 
        sender: 'You', 
        content: newMessage, 
        isOwnMessage: true 
      }
    ]);
    
    setNewMessage('');
    
    // In a real app, send to backend here
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emoji) => {
    setNewMessage(prevMessage => prevMessage + emoji);
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-4 px-4 flex flex-col">
      <div className="max-w-lg mx-auto bg-white/10 backdrop-blur rounded-lg shadow-lg flex flex-col flex-1">
        
        <div className="flex items-center justify-between bg-blue-900 p-4 rounded-t-lg shadow">
          <h2 className="text-lg font-bold text-white">🎂 Birthday Crew Chat</h2>
          <TierBadge tier={tier} />
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map(message => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              isOwnMessage={message.isOwnMessage} 
            />
          ))}
          <div ref={chatEndRef} />
        </div>
        
        <div className="p-4 border-t border-white/20">
          <div className="flex space-x-2 mb-2">
            <button 
              onClick={() => handleEmojiClick('🎂')}
              className="text-2xl hover:opacity-80 transition"
            >
              🎂
            </button>
            <button 
              onClick={() => handleEmojiClick('🎉')}
              className="text-2xl hover:opacity-80 transition"
            >
              🎉
            </button>
            <button 
              onClick={() => handleEmojiClick('🥳')}
              className="text-2xl hover:opacity-80 transition"
            >
              🥳
            </button>
            <span className="text-2xl opacity-50">⭐️ Elite Only</span>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              onClick={handleSendMessage}
              className="bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}