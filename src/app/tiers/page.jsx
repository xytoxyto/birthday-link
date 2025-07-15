import Link from 'next/link';
import TierBadge from '@/components/TierBadge';

// Feature check component
function FeatureCheck({ text }) {
  return (
    <div className="flex items-start space-x-2">
      <div className="text-green-400 flex-shrink-0">✓</div>
      <p className="text-white/80">{text}</p>
    </div>
  );
}

// Galaxy tier card
function GalaxyCard() {
  return (
    <div className="bg-blue-900/80 backdrop-blur rounded-lg shadow-lg p-6 text-white flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-1">🌌 Galaxy</h2>
        <TierBadge tier="Galaxy" />
      </div>
      
      <div className="text-3xl font-bold mb-4">$99.99<span className="text-lg text-white/70">/month</span></div>
      
      <div className="space-y-3 mb-6 flex-grow">
        <FeatureCheck text="Premium rooftop parties" />
        <FeatureCheck text="VIP service at all events" />
        <FeatureCheck text="Group matching with Galaxy members" />
        <FeatureCheck text="Free +1 guest pass" />
        <FeatureCheck text="Priority venue booking" />
      </div>
      
      <Link
        href="/checkout/galaxy"
        className="block w-full bg-yellow-400 text-blue-900 font-bold py-3 px-4 rounded-full text-center hover:bg-yellow-300 transition shadow-lg"
      >
        Choose Galaxy
      </Link>
    </div>
  );
}

// Elite tier card
function EliteCard() {
  return (
    <div className="bg-purple-900/80 backdrop-blur rounded-lg shadow-lg p-6 text-white flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-1">✨ Elite</h2>
        <TierBadge tier="Elite" />
      </div>
      
      <div className="text-3xl font-bold mb-4">$59.99<span className="text-lg text-white/70">/month</span></div>
      
      <div className="space-y-3 mb-6 flex-grow">
        <FeatureCheck text="Premium Elite-level events" />
        <FeatureCheck text="Concierge service" />
        <FeatureCheck text="Personalized birthday experience" />
        <FeatureCheck text="Reserved seating at events" />
        <FeatureCheck text="Exclusive pre-event meet & greets" />
      </div>
      
      <Link
        href="/checkout/elite"
        className="block w-full bg-yellow-400 text-purple-900 font-bold py-3 px-4 rounded-full text-center hover:bg-yellow-300 transition shadow-lg"
      >
        Choose Elite
      </Link>
    </div>
  );
}

// Cosmic tier card
function CosmicCard() {
  return (
    <div className="bg-pink-900/80 backdrop-blur rounded-lg shadow-lg p-6 text-white flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-1">🚀 Cosmic</h2>
        <TierBadge tier="Cosmic" />
      </div>
      
      <div className="text-3xl font-bold mb-4">$29.99<span className="text-lg text-white/70">/month</span></div>
      
      <div className="space-y-3 mb-6 flex-grow">
        <FeatureCheck text="Cosmic birthday events access" />
        <FeatureCheck text="Themed birthday experiences" />
        <FeatureCheck text="Group activities and games" />
        <FeatureCheck text="Commemorative birthday photos" />
        <FeatureCheck text="Cosmic member gift bag" />
      </div>
      
      <Link
        href="/checkout/cosmic"
        className="block w-full bg-yellow-400 text-pink-900 font-bold py-3 px-4 rounded-full text-center hover:bg-yellow-300 transition shadow-lg"
      >
        Choose Cosmic
      </Link>
    </div>
  );
}

export default function TiersPage() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto text-center text-white mb-12 space-y-2">
        <h1 className="text-4xl font-bold">Choose Your Tier</h1>
        <p className="text-white/80">Find the perfect Birthday Link experience for your special day.</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
        <GalaxyCard />
        <EliteCard />
        <CosmicCard />
      </div>
    </section>
  );
}