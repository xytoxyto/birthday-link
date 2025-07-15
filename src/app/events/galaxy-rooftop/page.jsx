import EventDetail from '@/components/EventDetail';

export const metadata = {
  title: 'Galaxy Rooftop Event',
  description: 'Join us for an unforgettable night at the Galaxy Rooftop with stunning views, amazing music, and great company.',
};

export default function GalaxyRooftopEventPage() {
  const eventData = {
    title: "Galaxy Rooftop",
    date: "2024-12-31",
    time: "9:00 PM - 2:00 AM",
    location: "Galaxy Rooftop Lounge, Downtown",
    description: "Join us for an unforgettable night at the Galaxy Rooftop with stunning views, amazing music, and great company.",
    imageUrl: "/images/galaxy-rooftop.jpg",
    ticketPrice: "$50",
    capacity: 200
  };
  
  return <EventDetail event={eventData} />;
}