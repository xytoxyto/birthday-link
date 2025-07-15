import AdminPanel from '@/components/AdminPanel';

export default function AdminPage() {
  return <AdminPanel />;
}{isAdmin && (
  <Link href="/admin" className="text-white underline hover:text-yellow-300">
    Admin Panel
  </Link>
)}