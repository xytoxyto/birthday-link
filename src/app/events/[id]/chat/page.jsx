'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import BirthdayChat from '@/components/BirthdayChat';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function EventChatPage() {
  const params = useParams();
  const eventId = params.id;
  const [messages, setMessages] = useState([]);
  const [showGiftIdeas, setShowGiftIdeas] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [usersTyping, setUsersTyping] = useState([]);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const { width, height } = useWindowSize();

  const giftIdeas = [
    { name: "Birthday Cake", emoji: "🎂", price: "$25" },
    { name: "Party Supplies Pack", emoji: "🎉", price: "$15" },
    { name: "Gift Card", emoji: "💳", price: "$50" },
    { name: "Custom T-shirt", emoji: "👕", price: "$30" },
  ];

  useEffect(() => {
    // Assume the event date comes from props or API
    const eventDate = new Date('2025-07-25T18:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;
      
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setCountdown({ days, hours, minutes });
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  const createPoll = () => {
    const question = prompt("Enter your poll question:");
    if (!question) return;
    
    const options = [];
    for (let i = 1; i <= 3; i++) {
      const option = prompt(`Enter option ${i}:`);
      if (option) options.push({ text: option, votes: 0 });
    }
    
    if (options.length > 0) {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          sender: 'You',
          content: question,
          isPoll: true,
          options,
          isOwnMessage: true
        }
      ]);
    }
  };

  const startRecording = async () => {
    audioChunksRef.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        
        // In a real app, you'd upload this and send a link
        setMessages([
          ...messages,
          {
            id: Date.now(),
            sender: 'You',
            content: '🎤 Voice message',
            audioUrl: audioUrl,
            isOwnMessage: true
          }
        ]);
      };
      
      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const handleSendMessage = (content) => {
    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: 'You',
        content,
        isOwnMessage: true
      }
    ]);
  };

  return (
    <>
      <BirthdayChat eventId={eventId} tier="Galaxy" />
      <div className="bg-blue-800/50 px-4 py-2 text-center text-white">
        <p className="text-sm">Birthday celebration in:</p>
        <div className="flex justify-center space-x-4 font-bold">
          <span>{countdown.days}d</span>
          <span>{countdown.hours}h</span>
          <span>{countdown.minutes}m</span>
        </div>
      </div>
      <button
        onClick={createPoll}
        className="text-white bg-blue-700 rounded-full px-3 py-1 text-sm"
      >
        📊 Create Poll
      </button>
      <button
        onClick={() => setShowGiftIdeas(!showGiftIdeas)}
        className="text-white bg-pink-600 rounded-full px-3 py-1 text-sm"
      >
        🎁 Gift Ideas
      </button>
      {showGiftIdeas && (
        <div className="absolute bottom-full left-0 mb-2 w-full bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-white">Gift Ideas</h3>
            <button onClick={() => setShowGiftIdeas(false)}>✖️</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {giftIdeas.map(gift => (
              <div key={gift.name} className="bg-white/20 rounded-lg p-2 text-white">
                <div className="text-2xl">{gift.emoji}</div>
                <div className="font-bold">{gift.name}</div>
                <div>{gift.price}</div>
                <button className="mt-1 bg-yellow-400 text-blue-900 rounded-full px-2 py-1 text-xs">
                  Share in Chat
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center space-x-2">
        {isRecording ? (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-4 py-3 rounded-full shadow animate-pulse"
          >
            Recording... Stop
          </button>
        ) : (
          <button
            onClick={startRecording}
            className="bg-blue-700 text-white px-4 py-3 rounded-full shadow"
          >
            🎤
          </button>
        )}
        <button 
          onClick={() => {
            handleSendMessage("🎉 HAPPY BIRTHDAY! 🎉");
            setShowConfetti(true);
          }}
          className="bg-pink-600 text-white rounded-full px-3 py-1 text-sm ml-2"
        >
          Birthday Wish
        </button>
      </div>
      {usersTyping.length > 0 && (
        <div className="text-white/70 text-sm italic mb-2 flex items-center">
          <div className="mr-2">
            <span className="inline-block w-2 h-2 bg-white/70 rounded-full animate-bounce mr-1"></span>
            <span className="inline-block w-2 h-2 bg-white/70 rounded-full animate-bounce delay-75 mr-1"></span>
            <span className="inline-block w-2 h-2 bg-white/70 rounded-full animate-bounce delay-150"></span>
          </div>
          {usersTyping.join(', ')} {usersTyping.length === 1 ? 'is' : 'are'} typing...
        </div>
      )}
      {messages.map((message) => (
        <div key={message.id} className={`my-2 p-3 rounded-lg ${message.isOwnMessage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
          <div className="font-bold">{message.sender}</div>
          <div className="whitespace-pre-wrap">{message.content}</div>
          {message.audioUrl && (
            <audio controls src={message.audioUrl} className="mt-2 w-full" />
          )}
          {message.isPoll && (
            <div className="mt-2 space-y-2">
              {message.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Update the votes in your state management
                    const updatedMessages = messages.map(msg => 
                      msg.id === message.id 
                        ? {
                            ...msg,
                            options: msg.options.map((opt, i) => 
                              i === index ? { ...opt, votes: opt.votes + 1 } : opt
                            )
                          }
                        : msg
                    );
                    setMessages(updatedMessages);
                  }}
                  className="block w-full bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-left transition"
                >
                  <div className="flex justify-between">
                    <span>{option.text}</span>
                    <span>{option.votes}</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 mt-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-yellow-400 h-full rounded-full"
                      style={{ 
                        width: `${message.options.reduce((sum, o) => sum + o.votes, 0) > 0 
                          ? (option.votes / message.options.reduce((sum, o) => sum + o.votes, 0) * 100) 
                          : 0}%` 
                      }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          )}
          {/* ChatMessage component for reactions */}
          <ChatMessage message={message} isOwnMessage={message.isOwnMessage} />
        </div>
      ))}
      {showConfetti && <Confetti width={width} height={height} recycle={false} onConfettiComplete={() => setShowConfetti(false)} />}
    </>
  );
}

// Add ChatMessage component
function ChatMessage({ message, isOwnMessage }) {
  const [showReactions, setShowReactions] = useState(false);
  const [reactions, setReactions] = useState(message.reactions || {});
  
  const addReaction = (emoji) => {
    setReactions(prev => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1
    }));
    setShowReactions(false);
  };
  
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-2`}>
      <div>
        <div className={`${isOwnMessage 
          ? 'bg-yellow-400 text-blue-900' 
          : 'bg-white/20 text-white'} 
          rounded-lg px-4 py-2 shadow max-w-xs relative`}
          onDoubleClick={() => setShowReactions(!showReactions)}
        >
          {message.content}
          
          {/* Reaction button */}
          <button 
            onClick={() => setShowReactions(!showReactions)}
            className="absolute -right-2 -bottom-2 bg-white/30 rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition"
          >
            😀
          </button>
          
          {/* Reaction picker */}
          {showReactions && (
            <div className="absolute bottom-full left-0 mb-2 bg-white/20 backdrop-blur rounded-full px-2 py-1 shadow-lg">
              {['👍', '❤️', '😂', '🎉', '🎂'].map(emoji => (
                <button 
                  key={emoji} 
                  onClick={() => addReaction(emoji)}
                  className="p-1 hover:bg-white/20 rounded-full transition"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Reaction display */}
        {Object.keys(reactions).length > 0 && (
          <div className="flex mt-1 ml-2 space-x-1">
            {Object.entries(reactions).map(([emoji, count]) => (
              <div key={emoji} className="bg-white/10 rounded-full px-2 py-0.5 text-xs flex items-center">
                <span>{emoji}</span>
                <span className="ml-1">{count}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}