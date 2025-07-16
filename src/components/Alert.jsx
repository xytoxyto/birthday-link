import { useState } from 'react';

export default function Alert({ type = 'info', message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const getAlertStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-700 text-white';
      case 'warning':
        return 'bg-yellow-400 text-blue-900';
      case 'error':
        return 'bg-red-700 text-white';
      case 'info':
      default:
        return 'bg-blue-800 text-white';
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`rounded-xl shadow-xl p-4 flex items-center justify-between border-2 backdrop-blur bg-white/30 ${getAlertStyles()} brand-glow`}>
      <div className="flex-1 text-base font-medium">{message}</div>
      <button 
        onClick={handleClose}
        className="ml-4 p-1 rounded-full hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Close alert"
      >
        <span className="text-lg">&#x2716;&#xfe0f;</span>
      </button>
    </div>
  );
}