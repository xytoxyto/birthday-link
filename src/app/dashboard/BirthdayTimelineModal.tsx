import Link from 'next/link';
import Image from 'next/image';

export default function BirthdayTimelineModal({ event, onClose }: { event: any, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700">×</button>
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image src={event.image} alt={event.name} fill className="object-cover rounded-lg" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-blue-900">{event.name}</h2>
        <div className="mb-2 text-blue-700 font-semibold">{event.date}</div>
        <div className="mb-4 text-gray-700">{event.notes}</div>
        <Link href={event.detailUrl} className="inline-block bg-blue-900 text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-700 transition">View Full Event</Link>
      </div>
    </div>
  );
}
