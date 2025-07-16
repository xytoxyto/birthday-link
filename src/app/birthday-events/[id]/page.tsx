
export default function Page({ params }: { params: { id: string } }) {
  return <div>Birthday Event ID: {params.id}</div>;
}
