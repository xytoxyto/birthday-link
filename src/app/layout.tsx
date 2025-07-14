import './globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'Birthday Link',
  description: 'Never celebrate alone again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        <NavBar />
        <main className="flex-grow flex flex-col">{children}</main>
  <footer className="bg-gray-50 border-t text-gray-700">
  <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Birthday Link. All rights reserved.
    </p>
    <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
      <a href="/legal" className="hover:underline text-sm">
        Terms & Privacy
      </a>
      <a href="mailto:contact@birthdaylink.com" className="hover:underline text-sm">
        Contact
      </a>
      <a href="#" className="hover:underline text-sm">
        Instagram
      </a>
      <a href="#" className="hover:underline text-sm">
        Facebook
      </a>
    </div>
  </div>
</footer>
      </body>
    </html>
  )
}
      