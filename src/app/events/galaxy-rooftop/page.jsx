import EventDetail from '@/components/EventDetail';

// Shared event data to maintain consistency
const eventInfo = {
  title: "Galaxy Rooftop",
  fullTitle: "Galaxy Rooftop Event",
  description: "Join us for an unforgettable night at the Galaxy Rooftop with stunning views, amazing music, and great company.",
  imageUrl: "/images/galaxy-rooftop.jpg",
  imageDimensions: { width: 1200, height: 630 },
};

export function generateMetadata() {
  return {
    title: eventInfo.fullTitle,
    description: eventInfo.description,
    openGraph: {
      title: eventInfo.fullTitle,
      description: eventInfo.description,
      images: [
        {
          url: eventInfo.imageUrl,
          width: eventInfo.imageDimensions.width,
          height: eventInfo.imageDimensions.height,
          alt: eventInfo.fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: eventInfo.fullTitle,
      description: eventInfo.description,
      images: [eventInfo.imageUrl],
    },
  };
}

/**
 * Galaxy Rooftop Event Page
 * Displays details for the Galaxy Rooftop event
 * @returns {JSX.Element} The rendered event detail page
 */
export default function GalaxyRooftopEventPage() {
  const eventData = {
    ...eventInfo,
    date: "2024-12-31",
    time: "9:00 PM - 2:00 AM",
    location: "Galaxy Rooftop Lounge, Downtown",
    ticketPrice: "$50",
    capacity: 200,
    slug: "galaxy-rooftop", // Add slug for URL sharing
    isShareable: true, // Enable sharing functionality
    organizer: "Galaxy Events" // Add organizer information
  };
  
  return <EventDetail event={eventData} />;
}