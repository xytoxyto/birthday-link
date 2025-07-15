'use client';
import { useState } from 'react';

export default function DashboardTabs({ activeTab, onChange }) {
  const tabs = [
    { id: 'events', label: 'Events' },
    { id: 'matches', label: 'Matches' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="flex bg-white/5 backdrop-blur rounded-lg p-1 mb-8">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`flex-1 py-2 px-4 rounded-md text-white transition ${
            activeTab === tab.id ? 'bg-white/20 font-bold' : 'hover:bg-white/10'
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}