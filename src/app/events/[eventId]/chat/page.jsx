'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import BirthdayChat from '@/components/BirthdayChat';
import { motion } from 'framer-motion';

// First install the missing dependencies:
// npm install react-confetti react-use

export default function EventChatPage() {
  // Import these dynamically to avoid build errors
  const [Confetti, setConfetti] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Load modules dynamically
  useEffect(() => {
    Promise.all([
      import('react-confetti').then(module => setConfetti(() => module.default)),
      import('react-use').then(() => {
        // Set up window size tracking
        const updateSize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
      })
    ]);
  }, []);

  const params = useParams();
  const eventId = params.id;
  const [messages, setMessages] = useState([]);
  const [showGiftIdeas, setShowGiftIdeas] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [isRecording, setIsRecording] = useState(false);
  // ...rest of the file remains unchanged...
}
