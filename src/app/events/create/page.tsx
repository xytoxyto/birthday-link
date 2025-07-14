import Link from 'next/link';

export default function EventsCreatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <section className="flex-grow flex items-center justify-center text-center p-4 md:p-8">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 md:p-8 border border-purple-300">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-birthday-gold">
            🎂 Create Your Birthday Event
          </h1>
          <p className="text-base md:text-lg text-purple-100 mb-6">
            Plan your unforgettable group birthday celebration. Choose your venue, customize the experience,
            and invite friends who share your special day. Birthday Link makes it seamless.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-birthday-gold text-purple-900 font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow hover:bg-yellow-400 transition text-sm md:text-base"
          >
            Back to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
