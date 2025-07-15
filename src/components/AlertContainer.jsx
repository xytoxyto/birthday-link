"use client";

import { useState } from 'react';
import Alert from './Alert';

export default function AlertContainer() {
  const [alerts, setAlerts] = useState([
    // Example alerts - in a real app these would be added dynamically
    { id: 1, type: 'info', message: 'Welcome to Birthday Link!' },
    // { id: 2, type: 'success', message: 'Your profile has been updated.' },
    // { id: 3, type: 'warning', message: 'Your membership will expire soon.' },
    // { id: 4, type: 'error', message: 'There was a problem with your payment.' },
  ]);

  const removeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  if (alerts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
      {alerts.map(alert => (
        <Alert 
          key={alert.id}
          type={alert.type}
          message={alert.message}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
    </div>
  );
}