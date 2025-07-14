import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <section className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8 border border-purple-300">
          <h1 className="text-5xl font-extrabold mb-4 text-birthday-gold">🎂 Join Birthday Link</h1>
          <p className="text-lg text-purple-100 mb-6">
            Become part of a premium community that celebrates you. Match with others who share your birthday, plan unforgettable group events, and enjoy curated venues and experiences.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            Continue to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
