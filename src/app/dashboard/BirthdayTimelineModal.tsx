
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface EventType {
  image: string;
  name: string;
  date: string;
  notes?: string;
  detailUrl: string;
}

interface BirthdayTimelineModalProps {
  event: EventType;
  onClose: () => void;
}

export default function BirthdayTimelineModal({ event, onClose }: BirthdayTimelineModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Trap focus inside modal
  useEffect(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = modalRef.current;
    if (!modal) return;
    const firstFocusable = modal.querySelectorAll<HTMLElement>(focusableElements)[0];
    firstFocusable?.focus();
    const handleTab = (e: KeyboardEvent) => {
      const elements = modal.querySelectorAll<HTMLElement>(focusableElements);
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    modal.addEventListener('keydown', handleTab);
    return () => modal.removeEventListener('keydown', handleTab);
  }, []);

  // Close modal on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative outline-none"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700"
          aria-label="Close modal"
          autoFocus
        >
          ×
        </button>
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          {event.image ? (
            <Image src={event.image} alt={event.name || 'Event image'} fill className="object-cover rounded-lg" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">No image</div>
          )}
        </div>
        <h2 className="text-2xl font-bold mb-2 text-blue-900">{event.name || 'Untitled Event'}</h2>
        <div className="mb-2 text-blue-700 font-semibold">{event.date || 'No date provided'}</div>
        {event.notes && <div className="mb-4 text-gray-700">{event.notes}</div>}
        <Link
          href={event.detailUrl || '#'}
          className="inline-block bg-blue-900 text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
          tabIndex={0}
        >
          View Full Event
        </Link>
      </div>
    </div>
  );
}
