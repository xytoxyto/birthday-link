import EventDetail from '@/components/EventDetail';

export default function GalaxyRooftopEventPage() {
  const eventData = {
    title: "Galaxy Rooftop",
    // Add other required props like date, location, description, etc.
  };
  
  return <EventDetail event={eventData} />;
}