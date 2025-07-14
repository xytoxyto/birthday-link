'use client';

export default function TestimonialSection() {
  const testimonials = [
    { name: 'Alex', quote: 'Birthday Link made my celebration unforgettable!' },
    { name: 'Jordan', quote: 'Met so many friends who share my birthday!' },
    { name: 'Taylor', quote: 'The premium service is top notch.' },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-birthday-purple">What Our Users Say</h2>
        <ul className="space-y-6">
          {testimonials.map((t) => (
            <li key={t.name} className="bg-white p-4 rounded-lg shadow">
              <p className="text-lg italic text-gray-700">&quot;{t.quote}&quot;</p>
              <p className="mt-2 text-sm font-semibold text-gray-500">- {t.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
