import Link from 'next/link';
import AdminPanel from '@/components/AdminPanel';

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
      <AdminPanel />
      <Link href="/">Back to Home</Link>
    </div>
  );
}