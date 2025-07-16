// Email rendering utilities for Birthday Link
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  SignupConfirmationEmail,
  EventInviteEmail,
  TierUpgradeThankYouEmail,
} from './templates';

export function renderSignupConfirmationEmail({ userName, profileUrl }: { userName: string; profileUrl: string }) {
  return renderToStaticMarkup(
    React.createElement(SignupConfirmationEmail, { userName, profileUrl })
  );
}

export function renderEventInviteEmail({ hostName, hostPhoto, eventName, eventDate, eventTime, rsvpUrl, tier }: {
  hostName: string;
  hostPhoto: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  rsvpUrl: string;
  tier: 'Galaxy' | 'Elite' | 'Cosmic';
}) {
  return renderToStaticMarkup(
    React.createElement(EventInviteEmail, {
      hostName,
      hostPhoto,
      eventName,
      eventDate,
      eventTime,
      rsvpUrl,
      tier,
    })
  );
}

export function renderTierUpgradeThankYouEmail({ userName, tier, perks, planUrl }: {
  userName: string;
  tier: 'Galaxy' | 'Elite' | 'Cosmic';
  perks: string[];
  planUrl: string;
}) {
  return renderToStaticMarkup(
    React.createElement(TierUpgradeThankYouEmail, {
      userName,
      tier,
      perks,
      planUrl,
    })
  );
}
