import { useState } from 'react';

export default function PaymentForm({ tier, onSubmit }) {
  const [formData, setFormData] = useState({
    nameOnCard: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

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
    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 text-white">
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nameOnCard" className="block text-sm font-medium text-white/80 mb-1">
            Name on Card
          </label>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-white/80 mb-1">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="XXXX XXXX XXXX XXXX"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-white/80 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-white/80 mb-1">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          className={`w-full mt-6 ${getButtonColor()} font-semibold px-4 py-3 rounded-full shadow transition-colors`}
        >
          Confirm Purchase
        </button>
      </form>
    </div>
  );
}