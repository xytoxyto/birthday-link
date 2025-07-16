'use client';
import { useState } from 'react';

export default function DashboardTabs({ activeTab, onChange }) {
  const tabs = [
    { id: 'events', label: 'Events' },
    { id: 'matches', label: 'Matches' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="flex bg-white/30 backdrop-blur-lg rounded-xl p-2 mb-10 border-2 border-primary/10 brand-glow">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`flex-1 py-3 px-6 rounded-lg text-foreground font-semibold transition text-lg tracking-wide shadow-sm border-2 border-transparent ${
            activeTab === tab.id
              ? 'bg-primary/90 text-white border-accent scale-105'
              : 'hover:bg-primary/10 hover:border-primary-light'
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}