'use client';

export default function TestimonialSection() {
  const testimonials = [
    { name: 'Alex', quote: 'Birthday Link made my celebration unforgettable!' },
    { name: 'Jordan', quote: 'Met so many friends who share my birthday!' },
    { name: 'Taylor', quote: 'The premium service is top notch.' },
  ];

  return (
    <section className="py-16 bg-brand-gradient bg-cover bg-center">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-extrabold text-foreground drop-shadow brand-glow">What Our Users Say</h2>
        <ul className="space-y-8">
          {testimonials.map((t) => (
            <li key={t.name} className="bg-white/40 backdrop-blur-lg rounded-xl shadow-xl p-6 border-2 border-primary/10">
              <p className="text-xl italic text-foreground/90">&quot;{t.quote}&quot;</p>
              <p className="mt-3 text-base font-semibold text-accent">- {t.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
