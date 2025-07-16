export default function TestDynamicPage({ params }: { params: { testId: string } }) {
  return <div>Test ID: {params.testId}</div>;
}
