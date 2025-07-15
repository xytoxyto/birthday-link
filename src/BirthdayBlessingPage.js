import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import Link from 'next/link'; // Uncomment if using Next.js routing

function BirthdayBlessingPage() {
  // Example state hooks for dynamic data
  const [recipient, setRecipient] = useState({
    name: "Antonio",
    age: 33,
    photo: "", // Will be set by AI or fallback
    story: "Antonio is hosting a rooftop bash with live music, cake, and matching birthdays.",
    goal: 500,
    raised: 320,
    daysLeft: 12,
  });
  const [birthdayMessage, setBirthdayMessage] = useState("");
  const [aiPhotoUrl, setAiPhotoUrl] = useState("");
  const [contributionAmount, setContributionAmount] = useState("");
  const [contributionMessage, setContributionMessage] = useState("");
  const [blessings, setBlessings] = useState([
    { message: "Happy Birthday Antonio! 🎉", amount: 25, from: "Jane" },
    { message: "Enjoy the DJ Upgrade!", amount: 100, from: "John" },
  ]);
  const [tierPerks] = useState("Elite and Cosmic contributors get VIP thank-you videos and shoutouts at the event!");
// Display tier perks in the UI (see Tier Perks Section below)
// The tierPerks state is used in the Tier Perks Section to show perks info:
// <p>{tierPerks}</p>
  // Example: Fetch AI-generated photo (replace with your API logic)
  useEffect(() => {
    async function fetchAiPhoto() {
      // Replace with your AI image API call
      setAiPhotoUrl("/images/antonio.jpg"); // fallback or AI-generated
    }
    fetchAiPhoto();
  }, []);

  // Example: Fetch AI-generated birthday message (replace with your API logic)
  useEffect(() => {
    async function fetchBirthdayMessage() {
      // Replace with your AI text API call
      setBirthdayMessage(`Wishing you an unforgettable birthday, Antonio! May your rooftop bash be filled with music, laughter, and joy.`);
    }
    fetchBirthdayMessage();
  }, []);

  // Example: Handle contribution form submit
  const handleBlessNow = async (e) => {
    e.preventDefault();
    // Replace with your API call to process contribution
    setBlessings([
      ...blessings,
      { message: contributionMessage, amount: contributionAmount, from: "You" },
    ]);
    setContributionAmount("");
    setContributionMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full mx-auto shadow-md overflow-hidden relative">
            <Image
              src={aiPhotoUrl || "/images/default_birthday.jpg"}
              alt={recipient.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold">{`🎉 ${recipient.name}'s ${recipient.age}th Birthday`}</h1>
          <p className="text-white/80">{birthdayMessage}</p>
        </div>

        {/* Funding Progress Bar */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-center space-y-2">
          <p className="text-lg">{`Goal: $${recipient.goal} · Raised: $${recipient.raised}`}</p>
          <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
            <div
              className="bg-yellow-400 h-4 rounded-full"
              style={{ width: `${Math.round((recipient.raised / recipient.goal) * 100)}%` }}
            ></div>
          </div>
          <p className="text-white/60 text-sm">{`🗓️ ${recipient.daysLeft} days left`}</p>
        </div>

        {/* About Section */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg space-y-2">
          <h2 className="text-2xl font-bold">About {recipient.name}’s Party</h2>
          <p className="text-white/80">{recipient.story}</p>
        </div>

        {/* Contribute Money Form */}
        <form
          className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg space-y-4"
          onSubmit={handleBlessNow}
        >
          <h2 className="text-2xl font-bold text-white">💛 Contribute Your Blessing</h2>
          <input
            type="number"
            placeholder="Amount ($)"
            className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow"
            value={contributionAmount}
            onChange={(e) => setContributionAmount(e.target.value)}
            required
            min={1}
          />
          <textarea
            placeholder="Your message..."
            className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow"
            value={contributionMessage}
            onChange={(e) => setContributionMessage(e.target.value)}
            required
          />
          <button className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition">
            Bless Now
          </button>
        </form>

        {/* Upsell Gifts Store */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">🎁 Give a Gift</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
              <span>🍰 Extra Cake Tier</span>
              <button className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full shadow hover:bg-yellow-300 transition">$25</button>
            </div>
            <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
              <span>🎧 DJ Upgrade</span>
              <button className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full shadow hover:bg-yellow-300 transition">$100</button>
            </div>
          </div>
        </div>

        {/* Blessings Wall */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg space-y-2">
          <h2 className="text-2xl font-bold">❤️ Blessings Wall</h2>
          <div className="space-y-2">
            {blessings.map((b, idx) => (
              <div key={idx} className="bg-white/20 rounded-lg p-3">
                <p className="text-white">
                  {`"${b.message}" — $${b.amount} from ${b.from}`}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tier Perks Section */}
        <div className="bg-yellow-400/10 backdrop-blur rounded-lg p-4 shadow-lg text-yellow-400 space-y-2">
          <h2 className="text-xl font-bold">⭐️ Tier Perks</h2>
          <p>{tierPerks}</p>
          {/* <Link href="/tiers/upgrade" className="inline-block bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">Upgrade Your Blessing</Link> */}
          <a href="/tiers/upgrade" className="inline-block bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            Upgrade Your Blessing
          </a>
        </div>
      </div>
    </div>
  );
}

export default BirthdayBlessingPage;