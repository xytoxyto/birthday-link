

"use client";
import AdminDashboardClient from './AdminDashboardClient';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col p-4 md:p-8">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-birthday-gold text-center">
          🎂 Birthday Link Admin Panel 🎉
        </h1>
        <p className="text-base md:text-lg text-purple-100 mb-8 text-center">
          Manage users, events, and site content. Use the tools below to moderate and curate amazing shared birthday experiences.
        </p>
        <AdminDashboardClient />
      </div>
    </main>
  );
}
