// Email templates for Birthday Link
// Tailwind-compatible inline styles for HTML emails

import React from 'react';

const brandGrad = 'background: linear-gradient(90deg, #1e3a8a 0%, #a21caf 100%); color: #fff;';
const ctaBtn = 'background-color: #facc15; color: #1e293b; padding: 12px 32px; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-block;';
const footerLink = 'color: #818cf8; text-decoration: underline; margin: 0 8px;';

const tierStyles: Record<string, React.CSSProperties> = {
  Galaxy: parseStyle('background: #1e3a8a; color: #fff; border-radius: 6px; padding: 4px 16px; font-weight: 700;'),
  Elite: parseStyle('background: linear-gradient(90deg, #fbbf24 0%, #a21caf 100%); color: #fff; border-radius: 6px; padding: 4px 16px; font-weight: 700;'),
  Cosmic: parseStyle('background: linear-gradient(90deg, #f472b6 0%, #a21caf 100%); color: #fff; border-radius: 6px; padding: 4px 16px; font-weight: 700;'),
};

export function SignupConfirmationEmail({ userName, profileUrl }: { userName: string; profileUrl: string }) {
  return (
    <html>
      <body style={{ fontFamily: 'Inter, Arial, sans-serif', background: '#f9fafb', margin: 0, padding: 0 }}>
        <div style={{ maxWidth: 480, margin: '0 auto', background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px #0001' }}>
          <div style={{ ...parseStyle(brandGrad), padding: '32px 0', textAlign: 'center', fontSize: 28, fontWeight: 800, letterSpacing: 1 }}>
            Birthday Link
          </div>
          <div style={{ padding: '32px 32px 16px', textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Welcome, {userName}! 🎉</div>
            <div style={{ fontSize: 16, color: '#334155', marginBottom: 24 }}>
              Thank you for signing up. Let’s make your next birthday unforgettable!
            </div>
            <a href={profileUrl} style={parseStyle(ctaBtn)}>Complete Your Profile</a>
          </div>
          <div style={{ borderTop: '1px solid #e5e7eb', padding: '20px 0 12px', textAlign: 'center', fontSize: 14, color: '#64748b' }}>
            <a href="https://birthday.link/about" style={parseStyle(footerLink)}>About</a>
            <a href="https://birthday.link/events" style={parseStyle(footerLink)}>Events</a>
            <a href="https://birthday.link/support" style={parseStyle(footerLink)}>Support</a>
          </div>
        </div>
      </body>
    </html>
  );
}

export function EventInviteEmail({ hostName, hostPhoto, eventName, eventDate, eventTime, rsvpUrl, tier }: {
  hostName: string;
  hostPhoto: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  rsvpUrl: string;
  tier: 'Galaxy' | 'Elite' | 'Cosmic';
}) {
  return (
    <html>
      <body style={{ fontFamily: 'Inter, Arial, sans-serif', background: '#f9fafb', margin: 0, padding: 0 }}>
        <div style={{ maxWidth: 480, margin: '0 auto', background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px #0001' }}>
          <div style={{ background: '#f1f5f9', padding: '24px 0', textAlign: 'center', fontSize: 26, fontWeight: 800 }}>
            🎈 You’re Invited!
          </div>
          <div style={{ padding: '28px 32px 16px', textAlign: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hostPhoto} alt={hostName} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, border: '2px solid #a21caf' }} />
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{hostName} invites you to:</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{eventName}</div>
            <div style={{ fontSize: 16, color: '#334155', marginBottom: 8 }}>{eventDate} at {eventTime}</div>
            <span style={tierStyles[tier]}> {tier} </span>
            <div style={{ margin: '24px 0' }}>
              <a href={rsvpUrl} style={parseStyle(ctaBtn)}>RSVP Now</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #e5e7eb', padding: '20px 0 12px', textAlign: 'center', fontSize: 14, color: '#64748b' }}>
            <a href="https://birthday.link/events" style={parseStyle(footerLink)}>See All Events</a>
            <a href="https://birthday.link/support" style={parseStyle(footerLink)}>Support</a>
          </div>
        </div>
      </body>
    </html>
  );
}

export function TierUpgradeThankYouEmail({ userName, tier, perks, planUrl }: {
  userName: string;
  tier: 'Galaxy' | 'Elite' | 'Cosmic';
  perks: string[];
  planUrl: string;
}) {
  return (
    <html>
      <body style={{ fontFamily: 'Inter, Arial, sans-serif', background: '#f9fafb', margin: 0, padding: 0 }}>
        <div style={{ maxWidth: 480, margin: '0 auto', background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px #0001' }}>
          <div style={{ ...parseStyle(brandGrad), padding: '32px 0', textAlign: 'center', fontSize: 32, fontWeight: 900, letterSpacing: 1 }}>
            Thank You!
          </div>
          <div style={{ padding: '32px 32px 16px', textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Hi {userName},</div>
            <div style={{ fontSize: 16, color: '#334155', marginBottom: 18 }}>
              You’ve upgraded to <span style={tierStyles[tier]}>{tier}</span>!
            </div>
            <ul style={{ textAlign: 'left', margin: '0 auto 18px', maxWidth: 320, color: '#334155', fontSize: 15 }}>
              {perks.map((perk, i) => (
                <li key={i} style={{ marginBottom: 6 }}>• {perk}</li>
              ))}
            </ul>
            <a href={planUrl} style={parseStyle(ctaBtn)}>Plan Your Event</a>
          </div>
          <div style={{ borderTop: '1px solid #e5e7eb', padding: '20px 0 12px', textAlign: 'center', fontSize: 14, color: '#64748b' }}>
            <a href="https://birthday.link/events" style={parseStyle(footerLink)}>Events</a>
            <a href="https://birthday.link/support" style={parseStyle(footerLink)}>Support</a>
          </div>
        </div>
      </body>
    </html>
  );
}

// Helper to parse style string to object for React inline style
function parseStyle(style: string): React.CSSProperties {
  return Object.fromEntries(
    style.split(';').filter(Boolean).map(rule => {
      const [k, v] = rule.split(':');
      return [k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase()), v.trim()];
    })
  );
}
