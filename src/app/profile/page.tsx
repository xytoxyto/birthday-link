import Link from 'next/link';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col font-sans">
      <section className="flex-grow flex items-center justify-center text-center p-4 md:p-8">
        <div className="max-w-2xl w-full bg-gradient-to-br from-white/10 via-purple-800/20 to-blue-900/30 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-12 border border-birthday-gold/40">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-birthday-gold drop-shadow-lg tracking-tight">
            Your Birthday Link Profile
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-8 font-medium">
            Welcome to your personalized celebration hub! Here you can update your birthday details, set your party preferences, and showcase your unique style. Keep your profile up to date to unlock exclusive birthday experiences and connect with your perfect celebration crew.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/profile/edit"
              className="inline-block bg-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition text-base md:text-lg border-2 border-birthday-gold"
            >
              Edit Profile
            </Link>
            <Link
              href="/dashboard"
              className="inline-block bg-gradient-to-r from-purple-400 via-yellow-300 to-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow-lg hover:from-yellow-200 hover:to-yellow-400 transition text-base md:text-lg border-2 border-purple-200"
            >
              Back to Dashboard
            </Link>
          </div>
          <div className="text-sm text-purple-200 mt-2">
            Need help? <a href="/support" className="underline hover:text-birthday-gold">Contact Support</a>
          </div>
        </div>
      </section>
    </main>
  );
}
