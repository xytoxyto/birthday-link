
export default function BirthdayEvent({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
