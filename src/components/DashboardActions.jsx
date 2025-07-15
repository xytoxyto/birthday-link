import Link from 'next/link';

export default function DashboardActions() {
  const actions = [
    { 
      title: 'Create Event', 
      icon: '🎉', 
      description: 'Host your own birthday celebration',
      href: '/events/create',
      color: 'from-blue-700 to-blue-900' 
    },
    { 
      title: 'Custom Cake', 
      icon: '🎂', 
      description: 'Design a cake for your party',
      href: '/custom-cake',
      color: 'from-pink-600 to-pink-800'
    },
    { 
      title: 'Upgrade Tier', 
      icon: '⭐', 
      description: 'Get more perks and features',
      href: '/tiers',
      color: 'from-yellow-500 to-yellow-700'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {actions.map((action, index) => (
        <Link key={index} href={action.href} className="block">
          <div className={`bg-gradient-to-br ${action.color} rounded-lg p-4 shadow-lg h-full text-white hover:opacity-90 transition`}>
            <div className="text-3xl mb-2">{action.icon}</div>
            <h3 className="text-xl font-bold mb-1">{action.title}</h3>
            <p className="text-white/80 text-sm">{action.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}