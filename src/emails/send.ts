// Email sending logic for Birthday Link
import nodemailer from 'nodemailer';
import { renderSignupConfirmationEmail, renderEventInviteEmail, renderTierUpgradeThankYouEmail } from './index';

// Configure your SMTP transport here
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendSignupConfirmationEmail({
  to,
  userName,
  profileUrl,
}: {
  to: string;
  userName: string;
  profileUrl: string;
}) {
  const html = renderSignupConfirmationEmail({ userName, profileUrl });
  await transporter.sendMail({
    from: 'Birthday Link <no-reply@birthday.link>',
    to,
    subject: 'Welcome to Birthday Link! 🎉',
    html,
  });
}

export async function sendEventInviteEmail({
  to,
  hostName,
  hostPhoto,
  eventName,
  eventDate,
  eventTime,
  rsvpUrl,
  tier,
}: {
  to: string;
  hostName: string;
  hostPhoto: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  rsvpUrl: string;
  tier: 'Galaxy' | 'Elite' | 'Cosmic';
}) {
  const html = renderEventInviteEmail({ hostName, hostPhoto, eventName, eventDate, eventTime, rsvpUrl, tier });
  await transporter.sendMail({
    from: 'Birthday Link <no-reply@birthday.link>',
    to,
    subject: `You're Invited: ${eventName}`,
    html,
  });
}

export async function sendTierUpgradeThankYouEmail({
  to,
  userName,
  tier,
  perks,
  planUrl,
}: {
  to: string;
  userName: string;
  tier: 'Galaxy' | 'Elite' | 'Cosmic';
  perks: string[];
  planUrl: string;
}) {
  const html = renderTierUpgradeThankYouEmail({ userName, tier, perks, planUrl });
  await transporter.sendMail({
    from: 'Birthday Link <no-reply@birthday.link>',
    to,
    subject: `Thank You for Upgrading to ${tier}!`,
    html,
  });
}
