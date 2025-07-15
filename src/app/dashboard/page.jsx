'use client';
import { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardTabs from '@/components/DashboardTabs';
import DashboardEvents from '@/components/DashboardEvents';
import DashboardMatches from '@/components/DashboardMatches';
import DashboardSettings from '@/components/DashboardSettings';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('events');
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    tier: 'Galaxy',
    nextBirthday: 'July 25'
  });

  return (
    <main className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <DashboardHeader user={user} />
        <DashboardTabs activeTab={activeTab} onChange={setActiveTab} />
        
        {activeTab === 'events' && <DashboardEvents />}
        {activeTab === 'matches' && <DashboardMatches />}
        {activeTab === 'settings' && <DashboardSettings user={user} onUpdate={typeof setUser === 'function' ? setUser : undefined} />}
      </div>
    </main>
  );
}