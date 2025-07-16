// Example usage of Birthday Link email sending
import {
  sendSignupConfirmationEmail,
  sendEventInviteEmail,
  sendTierUpgradeThankYouEmail,
} from './send';

// Signup Confirmation Example
async function exampleSignupConfirmation() {
  await sendSignupConfirmationEmail({
    to: 'user@example.com',
    userName: 'Jane Doe',
    profileUrl: 'https://birthday.link/profile/jane',
  });
}

// Event Invite Example
async function exampleEventInvite() {
  await sendEventInviteEmail({
    to: 'friend@example.com',
    hostName: 'Jane Doe',
    hostPhoto: 'https://birthday.link/images/jane.jpg',
    eventName: 'Jane’s Birthday Bash',
    eventDate: 'August 10, 2025',
    eventTime: '7:00 PM',
    rsvpUrl: 'https://birthday.link/events/123/rsvp',
    tier: 'Galaxy',
  });
}

// Tier Upgrade Thank You Example
async function exampleTierUpgradeThankYou() {
  await sendTierUpgradeThankYouEmail({
    to: 'user@example.com',
    userName: 'Jane Doe',
    tier: 'Elite',
    perks: [
      'VIP event access',
      'Priority support',
      'Exclusive gifts',
    ],
    planUrl: 'https://birthday.link/plan',
  });
}

// To test, call any of the above functions in your backend logic.
// exampleSignupConfirmation();
// exampleEventInvite();
// exampleTierUpgradeThankYou();
