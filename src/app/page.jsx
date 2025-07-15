import Link from 'next/link';
import SignupForm from '@/components/SignupForm';

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/login">Login</Link>
      <SignupForm />
    </main>
  );
}