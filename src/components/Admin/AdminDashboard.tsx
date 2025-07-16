import React, { useState } from 'react';

const mockUsers = [
  { id: 1, name: 'Jane Doe', email: 'jane@email.com', role: 'user', status: 'active' },
  { id: 2, name: 'John Smith', email: 'john@email.com', role: 'admin', status: 'active' },
  { id: 3, name: 'Maria Chen', email: 'maria@email.com', role: 'user', status: 'banned' },
];

const mockEvents = [
  { id: 1, name: 'Galaxy Rooftop Party', date: '2024-09-15', status: 'active' },
  { id: 2, name: 'Elite Lounge Dinner', date: '2024-10-03', status: 'pending' },
  { id: 3, name: 'Cosmic Bowling Night', date: '2024-11-20', status: 'cancelled' },
];

export default function AdminDashboard() {
  const [users, setUsers] = useState(mockUsers);
  const [events, setEvents] = useState(mockEvents);

  const handleBanUser = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: 'banned' } : u));
  };
  const handleActivateUser = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: 'active' } : u));
  };
  const handleCancelEvent = (id: number) => {
    setEvents(events.map(e => e.id === id ? { ...e, status: 'cancelled' } : e));
  };
  const handleActivateEvent = (id: number) => {
    setEvents(events.map(e => e.id === id ? { ...e, status: 'active' } : e));
  };

  return (
    <div className="space-y-10">
      {/* User Management */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-yellow-300">User Management</h2>
        <table className="w-full text-left bg-white/10 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-purple-900 text-white">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-purple-800">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.status}</td>
                <td className="p-2 space-x-2">
                  {user.status === 'active' ? (
                    <button onClick={() => handleBanUser(user.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Ban</button>
                  ) : (
                    <button onClick={() => handleActivateUser(user.id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">Activate</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Event Management */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-yellow-300">Event Management</h2>
        <table className="w-full text-left bg-white/10 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-purple-900 text-white">
              <th className="p-2">Name</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id} className="border-b border-purple-800">
                <td className="p-2">{event.name}</td>
                <td className="p-2">{event.date}</td>
                <td className="p-2">{event.status}</td>
                <td className="p-2 space-x-2">
                  {event.status === 'active' ? (
                    <button onClick={() => handleCancelEvent(event.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Cancel</button>
                  ) : (
                    <button onClick={() => handleActivateEvent(event.id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">Activate</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
