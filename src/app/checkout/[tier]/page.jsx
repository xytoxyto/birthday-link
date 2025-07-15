"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import TierSummaryCard from '@/components/TierSummaryCard';
import PaymentForm from '@/components/PaymentForm';
import OrderConfirmation from '@/components/OrderConfirmation';

export default function CheckoutPage() {
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const params = useParams();
  const tier = params.tier || 'galaxy';
  
  const tierFeatures = {
    galaxy: [
      'Access to premium rooftop parties',
      'VIP service at all events',
      'Group matching with other Galaxy members',
      'Free +1 guest pass',
      'Priority booking for exclusive venues'
    ],
    elite: [
      'Access to premium Elite-level events',
      'Concierge service for special requests',
      'Personalized birthday experience',
      'Reserved seating at all events',
      'Exclusive pre-event meet & greets'
    ],
    cosmic: [
      'Access to all Cosmic birthday events',
      'Special themed birthday experiences',
      'Fun group activities and games',
      'Commemorative birthday photos',
      'Cosmic member gift bag'
    ]
  };
  
  const tierPrices = {
    galaxy: 99.99,
    elite: 59.99,
    cosmic: 29.99
  };

  const handlePaymentSubmit = (formData) => {
    // In a real app, you'd process payment here
    console.log('Processing payment', formData);
    
    // Simulate payment processing
    setTimeout(() => {
      setOrderNumber(`BL-${Date.now().toString().slice(-6)}`);
      setOrderComplete(true);
    }, 1500);
  };

  const getBgGradient = () => {
    switch (tier.toLowerCase()) {
      case 'galaxy':
        return 'from-blue-900 to-black';
      case 'elite':
        return 'from-purple-900 to-black';
      case 'cosmic':
        return 'from-pink-900 to-black';
      default:
        return 'from-blue-900 to-black';
    }
  };

  return (
    <section className={`bg-gradient-to-b ${getBgGradient()} min-h-screen py-12 px-4`}>
      <div className="max-w-lg mx-auto space-y-6">
        {!orderComplete ? (
          <>
            <h1 className="text-3xl font-bold text-white text-center mb-8">
              Subscribe to {tier.charAt(0).toUpperCase() + tier.slice(1)} Tier
            </h1>
            
            <TierSummaryCard 
              tier={tier.charAt(0).toUpperCase() + tier.slice(1)} 
              price={tierPrices[tier.toLowerCase()]} 
              features={tierFeatures[tier.toLowerCase()]} 
            />
            
            <PaymentForm 
              tier={tier}
              onSubmit={handlePaymentSubmit}
            />
          </>
        ) : (
          <OrderConfirmation 
            tier={tier.charAt(0).toUpperCase() + tier.slice(1)}
            orderNumber={orderNumber}
          />
        )}
      </div>
    </section>
  );
}