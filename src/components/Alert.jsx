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
    <div className={`rounded-lg shadow-lg p-4 flex items-center justify-between ${getAlertStyles()}`}>
      <div className="flex-1">{message}</div>
      <button 
        onClick={handleClose}
        className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors focus:outline-none"
        aria-label="Close alert"
      >
        ✖️
      </button>
    </div>
  );
}