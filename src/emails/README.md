# Birthday Link Email Templates

This folder contains React-based HTML email templates for Birthday Link, styled with Tailwind-compatible inline styles and brand colors.

## Templates
- **SignupConfirmationEmail**: Welcome email with brand gradient, emoji, CTA, and footer links.
- **EventInviteEmail**: Event invite with host info, event details, RSVP button, and tier badge.
- **TierUpgradeThankYouEmail**: Thank you for upgrading, tier badge, perks, and CTA.

## Usage
Render any template to HTML using the exported functions in `index.ts`:

```ts
import { renderSignupConfirmationEmail } from './emails';

const html = renderSignupConfirmationEmail({
  userName: 'Jane',
  profileUrl: 'https://birthday.link/profile',
});
```

## Brand Colors
- Galaxy: blue-900
- Elite: gold/purple
- Cosmic: neon/pink
- CTA: yellow-400

All styles are inlined for email compatibility.
