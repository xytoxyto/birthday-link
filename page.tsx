<div className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex flex-col items-center justify-start py-8 px-4">
  <div className="w-full max-w-md rounded-2xl shadow-xl backdrop-blur-md bg-white/10 p-6 flex flex-col gap-6">
    {/* Header */}
    <div className="text-center">
      <span className="text-3xl">⭐️</span>
      <h1 className="text-2xl font-bold text-white mt-2">Invite friends, earn rewards!</h1>
      <p className="text-sm text-blue-100 mt-1">Share your referral link and unlock exclusive perks.</p>
    </div>

    {/* Referral Link Section */}
    <div className="flex flex-col gap-2">
      <label className="text-blue-200 text-xs font-semibold">Your Referral Link</label>
      <div className="flex items-center bg-white/20 rounded-lg px-3 py-2">
        <span className="text-white text-sm truncate flex-1">https://birthday.link/r/yourcode</span>
        <button
          className="ml-2 px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white text-xs rounded shadow"
          onClick={() => navigator.clipboard.writeText('https://birthday.link/r/yourcode')}
        >
          Copy
        </button>
      </div>
    </div>

    {/* Stats Section */}
    <div className="flex flex-col items-center bg-white/10 rounded-lg py-3">
      <span className="text-4xl font-bold text-blue-300">12</span>
      <span className="text-xs text-blue-100">Total Signups</span>
    </div>

    {/* Rewards Tiers Section */}
    <div>
      <h2 className="text-lg font-semibold text-white mb-2">Rewards Tiers</h2>
      <ul className="flex flex-col gap-3">
        <li className="bg-blue-900/60 rounded-lg px-4 py-3 flex flex-col">
          <span className="font-bold text-blue-200">5 Signups</span>
          <span className="text-blue-100 text-xs">🎉 Free Birthday Badge</span>
        </li>
        <li className="bg-blue-900/60 rounded-lg px-4 py-3 flex flex-col">
          <span className="font-bold text-blue-200">10 Signups</span>
          <span className="text-blue-100 text-xs">🥳 Early Access to New Features</span>
        </li>
        <li className="bg-blue-900/60 rounded-lg px-4 py-3 flex flex-col">
          <span className="font-bold text-blue-200">20 Signups</span>
          <span className="text-blue-100 text-xs">🎁 $10 Gift Card</span>
        </li>
      </ul>
    </div>

    {/* Tier-gated CTA */}
    <div className="mt-4 bg-blue-800/80 rounded-lg px-4 py-3 text-center shadow-lg">
      <span className="text-white font-semibold">Upgrade to Pro for <span className="text-yellow-300">2x rewards</span>!</span>
      <button className="mt-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded shadow">
        Upgrade Now
      </button>
    </div>
  </div>
</div>