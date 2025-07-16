import React, { useState } from "react";

export default function InvitePage() {
  const [email, setEmail] = useState("");
  const [invitees, setInvitees] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const eventLink = "https://birthday-link.com/event/abc123";

  const handleAdd = () => {
    if (email && /\S+@\S+\.\S+/.test(email) && !invitees.includes(email)) {
      setInvitees([...invitees, email]);
      setEmail("");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(eventLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-2xl shadow-xl backdrop-blur-md bg-black/60 p-6 flex flex-col gap-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
            <span role="img" aria-label="balloon">🎈</span>
            Invite Friends
          </h1>
          <p className="text-blue-200 mt-2">Send invites and share your event!</p>
        </header>

        <section>
          <label htmlFor="email" className="block text-white font-semibold mb-2">Invite by Email</label>
          <div className="flex gap-2">
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="friend@email.com"
              className="flex-1 rounded-lg px-3 py-2 bg-blue-950 text-white placeholder-blue-400 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold shadow"
            >
              Add
            </button>
          </div>
          {invitees.length > 0 && (
            <ul className="mt-4 space-y-2">
              {invitees.map((email, idx) => (
                <li key={idx} className="bg-blue-950/70 text-white rounded px-3 py-2 flex items-center justify-between shadow">
                  {email}
                  {/* Optionally add a remove button */}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <label className="block text-white font-semibold mb-2">Share Event Link</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={eventLink}
              readOnly
              className="flex-1 rounded-lg px-3 py-2 bg-blue-950 text-blue-300 border border-blue-700"
            />
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 font-semibold shadow"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </section>

        <section className="bg-blue-950/80 rounded-xl p-4 mt-2 shadow-inner">
          <h2 className="text-lg font-bold text-yellow-400 mb-2">Elite & Cosmic Perks</h2>
          <ul className="list-disc list-inside text-blue-200 text-sm space-y-1">
            <li>Send branded e-vites with Elite or Cosmic themes</li>
            <li>Unlock animated invites and RSVP tracking</li>
            <li>Priority support and exclusive event badges</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
