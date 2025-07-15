import Link from 'next/link';
import TierBadge from './TierBadge';

export default function OrderConfirmation({ tier, orderNumber }) {
  const getButtonColor = () => {
    switch (tier.toLowerCase()) {
      case 'galaxy':
        return 'bg-yellow-400 text-blue-900 hover:bg-yellow-300';
      case 'elite':
        return 'bg-yellow-400 text-purple-900 hover:bg-yellow-300';
      case 'cosmic':
        return 'bg-yellow-400 text-pink-900 hover:bg-yellow-300';
      default:
        return 'bg-yellow-400 text-gray-900 hover:bg-yellow-300';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 text-white text-center space-y-6">
      <div className="text-5xl">🎉</div>
      <h1 className="text-2xl font-bold">Thank You For Your Purchase!</h1>
      
      <p className="text-white/80">
        You have successfully subscribed to the
      </p>
      
      <div className="flex justify-center">
        <TierBadge tier={tier} />
      </div>
      
      {orderNumber && (
        <p className="text-white/80 text-sm">
          Order Number: {orderNumber}
        </p>
      )}
      
      <p className="text-white/80">
        You will receive a confirmation email shortly with all the details.
      </p>
      
      <Link 
        href="/dashboard"
        className={`inline-block ${getButtonColor()} font-semibold px-6 py-3 rounded-full shadow transition-colors`}
      >
        Go to Dashboard
      </Link>
    </div>
  );
}