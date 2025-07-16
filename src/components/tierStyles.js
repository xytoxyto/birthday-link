// Shared style objects for tier colors

/**
 * @typedef {Object} TierStyle
 * @property {string} background - Tailwind class for background color
 * @property {string} text - Tailwind class for text color
 * @property {string} button - Tailwind classes for button color
 */

/**
 * Tier style definitions for Galaxy, Elite, and Cosmic.
 * @type {Record<string, TierStyle>}
 */
export const TIER_STYLES = Object.freeze({
  galaxy: Object.freeze({
    background: 'bg-blue-900',
    text: 'text-white',
    button: 'bg-yellow-400 text-blue-900',
  }),
  elite: Object.freeze({
    background: 'bg-purple-900',
    text: 'text-yellow-400',
    button: 'bg-yellow-400 text-purple-900',
  }),
  cosmic: Object.freeze({
    background: 'bg-pink-900',
    text: 'text-white',
    button: 'bg-yellow-400 text-pink-900',
  }),
});

const DEFAULT_STYLE = TIER_STYLES.galaxy;

/**
 * Memoization cache for tier style lookups.
 * @type {Record<string, TierStyle>}
 */
const memo = Object.create(null);

/**
 * Returns the style object for a given tier.
 * Accepts any string or falsy value. Falls back to Galaxy style if not found.
 * @param {string} tier - The tier name (e.g., 'Galaxy', 'Elite', 'Cosmic')
 * @returns {TierStyle}
 */
export function getTierStyles(tier) {
  if (!tier || typeof tier !== 'string') return DEFAULT_STYLE;
  const key = tier.trim().toLowerCase();
  if (Object.prototype.hasOwnProperty.call(memo, key)) return memo[key];
  const found = TIER_STYLES[key];
  memo[key] = found || DEFAULT_STYLE;
  return memo[key];
}
