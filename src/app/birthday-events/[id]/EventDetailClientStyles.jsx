"use client";

export default function EventDetailClientStyles() {
  return (
    <style jsx global>{`
      @keyframes confetti {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      .animate-confetti circle {
        animation: confetti 4s linear infinite;
      }
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 6s ease-in-out infinite;
      }
      .animate-pulse-slow {
        animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
    `}</style>
  );
}
