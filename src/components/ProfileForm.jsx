export default function ProfileForm() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg text-white space-y-6">
        <h1 className="text-3xl font-bold text-center">🎂 Your Birthday Link Profile</h1>
        <p className="text-center text-white/80">Manage your birthday preferences, customize your profile, and make sure you're matched with the perfect birthday crew.</p>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="date"
            placeholder="Birthday"
            className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <div className="flex items-center space-x-2">
            <span className="text-sm">Tier:</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-700">
              Galaxy
            </span>
          </div>

          <input
            type="password"
            placeholder="Change Password"
            className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
}import ProfileForm from '@/components/ProfileForm';

export default function ProfilePage() {
  return <ProfileForm />;
}// Add this import at the top of your DashboardEvents.jsx file
import Link from 'next/link';

// Then add a profile link somewhere in the component, for example:
<div className="text-center mt-8">
  <Link href="/profile" className="text-white underline hover:text-yellow-300">
    View Profile
  </Link>
</div>