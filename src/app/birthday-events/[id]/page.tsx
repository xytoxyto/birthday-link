
interface BirthdayEventPageProps {
  params: { id: string };
}

export default function BirthdayEventPage({ params }: BirthdayEventPageProps) {
  return <div>Birthday Event ID: {params.id}</div>;
}
