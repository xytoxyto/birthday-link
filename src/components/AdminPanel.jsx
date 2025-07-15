import TierBadge from './TierBadge';

export default function AdminPanel() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-6">

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg text-white text-center">
          <h1 className="text-3xl font-bold mb-2">🎂 Birthday Link Admin Panel 🎉</h1>
          <p className="text-white/80">
            Manage events, users, signups, site content, and moderation tools. Birthday Link's Admin Panel empowers you to curate amazing shared birthday experiences.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg space-y-4 text-white">
          <h2 className="text-xl font-bold">👥 Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-white/80">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Tier</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/20">
                  <td className="px-4 py-2">Jane Doe</td>
                  <td className="px-4 py-2">jane@example.com</td>
                  <td className="px-4 py-2"><TierBadge tier="Galaxy" /></td>
                  <td className="px-4 py-2">
                    <button className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full shadow hover:bg-yellow-300 transition">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg space-y-4 text-white">
          <h2 className="text-xl font-bold">🎟️ Event Approvals</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-white/5 p-4 rounded shadow">
              <div>
                <p className="font-semibold">Cosmic Bowling Night</p>
                <p className="text-sm text-white/60">Pending Approval</p>
              </div>
              <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
                Approve
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg space-y-4 text-white">
          <h2 className="text-xl font-bold">📈 Tier Sales</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Galaxy</span>
              <span>$5,230</span>
            </li>
            <li className="flex justify-between">
              <span>Elite</span>
              <span>$3,420</span>
            </li>
            <li className="flex justify-between">
              <span>Cosmic</span>
              <span>$2,110</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}