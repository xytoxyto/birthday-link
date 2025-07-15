'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function EventsCreatePage() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    location: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., API call
    console.log('Form submitted:', formData);
    // Redirect or show success message
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <section className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 md:p-8 border border-purple-300">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-300 text-center">
            🎂 Create Your Birthday Event
          </h1>
          <p className="text-base md:text-lg text-purple-100 mb-6 text-center">
            Plan your unforgettable group birthday celebration. Choose your venue, customize the experience,
            and invite friends who share your special day. Birthday Link makes it seamless.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="eventName" className="block text-purple-100">Event Name</label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-purple-300 text-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="eventDate" className="block text-purple-100">Event Date</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-purple-300 text-white [color-scheme:dark]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="location" className="block text-purple-100">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-purple-300 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="block text-purple-100">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-purple-300 text-white"
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <Link
                href="/dashboard"
                className="inline-block bg-purple-600 text-white font-bold px-4 py-2 rounded-full shadow hover:bg-purple-700 transition"
              >
                Back to Dashboard
              </Link>
              <button
                type="submit"
                className="inline-block bg-yellow-300 text-purple-900 font-bold px-6 py-2 rounded-full shadow hover:bg-yellow-400 transition"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
