"use client";
"use client";
import React, { useState } from 'react';
import TierBadge from '@/components/TierBadge';

const salesData = [
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    tier: 'Galaxy',
    joined: 'July 2025',
    amount: 50,
  },
  {
    name: 'Carlos Rivera',
    email: 'carlos@example.com',
    tier: 'Elite',
    joined: 'July 2025',
    amount: 100,
  },
];

const revenueSummary = [
  { tier: 'Galaxy', amount: 1500 },
  { tier: 'Elite', amount: 1200 },
  { tier: 'Cosmic', amount: 550 },
];

export default function TierSalesReport() {
  const [exporting, setExporting] = useState(false);

  const handleExport = () => {
    setExporting(true);
    const csvRows = [
      ['Name', 'Email', 'Tier', 'Joined', 'Amount'],
      ...salesData.map(row => [row.name, row.email, row.tier, row.joined, `$${row.amount}`]),
    ];
    const csvContent = csvRows.map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tier-sales-report.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setExporting(false);
  };

  const totalRevenue = revenueSummary.reduce((sum, t) => sum + t.amount, 0);

  return (
    <section className="bg-gradient-to-b from-blue-950 via-purple-950 to-black min-h-screen py-12 px-4 animate-fade-in">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center text-white mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 shadow-lg animate-bounce-slow">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><path d="M18 2v32M2 18h32" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-birthday-gold mb-2 tracking-tight drop-shadow-lg">📊 Tier Sales Reporting</h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto font-medium">
            Track your premium signups and revenue growth with real-time insights.
          </p>
        </div>

        {/* Revenue Summary */}
        <div className="bg-gradient-to-r from-yellow-400/20 via-pink-400/10 to-blue-400/10 backdrop-blur rounded-2xl p-6 shadow-xl text-white space-y-2 border border-yellow-300/20">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="13" stroke="#FFD700" strokeWidth="2"/><path d="M8 18l4-4 4 4 4-8" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Monthly Revenue
          </h2>
          <p className="text-3xl font-bold text-yellow-300 drop-shadow">${totalRevenue.toLocaleString()}</p>
          <ul className="list-none flex flex-wrap gap-4 mt-2">
            {revenueSummary.map(t => (
              <li key={t.tier} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-semibold shadow border border-white/10">
                <TierBadge tier={t.tier} />
                <span>${t.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tier Sales Table */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 shadow-lg text-white space-y-2 border border-purple-300/20">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="10" width="4" height="10" rx="2" fill="#A78BFA"/><rect x="10" y="6" width="4" height="14" rx="2" fill="#FBBF24"/><rect x="17" y="2" width="4" height="18" rx="2" fill="#38BDF8"/></svg>
            User Tier Sales
          </h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-left text-white/80">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-2 font-semibold tracking-wide">Name</th>
                  <th className="py-2 font-semibold tracking-wide">Email</th>
                  <th className="py-2 font-semibold tracking-wide">Tier</th>
                  <th className="py-2 font-semibold tracking-wide">Joined</th>
                  <th className="py-2 font-semibold tracking-wide">Amount</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((row, i) => (
                  <tr
                    key={row.email}
                    className={
                      'transition-colors duration-200 ' +
                      (i !== salesData.length - 1 ? 'border-b border-white/20' : '') +
                      (i % 2 === 0 ? ' bg-white/5 hover:bg-white/10' : ' hover:bg-white/10')
                    }
                  >
                    <td className="py-2 font-medium">{row.name}</td>
                    <td className="py-2"><a href={`mailto:${row.email}`} className="underline hover:text-yellow-300 transition">{row.email}</a></td>
                    <td className="py-2"><TierBadge tier={row.tier} /></td>
                    <td className="py-2">{row.joined}</td>
                    <td className="py-2 font-semibold text-yellow-200">${row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Export Button */}
        <div className="text-center mt-8">
          <button
            className="bg-gradient-to-r from-yellow-400 via-pink-300 to-blue-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-xl hover:scale-105 hover:from-yellow-300 hover:to-blue-200 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-200/50"
            onClick={handleExport}
            disabled={exporting}
            aria-busy={exporting}
          >
            {exporting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin" width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1e293b" strokeWidth="4" opacity="0.2"/><path d="M22 12a10 10 0 0 1-10 10" stroke="#1e293b" strokeWidth="4"/></svg>
                Exporting...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="18" width="16" height="2" rx="1" fill="#1e293b"/></svg>
                Export CSV
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
// ...existing code...
