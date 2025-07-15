export default function LegalPage() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg text-white space-y-6">
        <h1 className="text-3xl font-bold text-center mb-2">📜 Terms of Service</h1>
        <p className="text-white/80 leading-relaxed">
          By using Birthday Link, you agree to our terms. You must be at least 18 years old to use our platform. All payments are final, and event bookings are subject to availability.
        </p>
        <p className="text-white/80 leading-relaxed">
          We reserve the right to cancel or reschedule events as needed. Refunds are provided at our discretion. Misuse of the platform may result in account suspension.
        </p>

        <h2 className="text-2xl font-bold mb-2">🔒 Privacy Policy</h2>
        <p className="text-white/80 leading-relaxed">
          We respect your privacy. Your personal information is used to match you with birthday events and will not be sold or shared without your consent, except as required by law.
        </p>
        <p className="text-white/80 leading-relaxed">
          We use secure payment processing and encrypted data storage. You can request deletion of your account and data at any time by contacting support.
        </p>

        <p className="text-white/60 text-sm text-center">
          © 2025 Birthday Link. All rights reserved.
        </p>
      </div>
    </section>
  );
}