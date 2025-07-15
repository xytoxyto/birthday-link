import './globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Birthday Link',
  description: 'Never celebrate alone again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-900 pb-20 md:pb-0">
        <NavBar />
        <main className="flex-grow flex flex-col">{children}</main>
        <footer className="bg-gradient-to-r from-birthday-blue to-birthday-purple text-white">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} Birthday Link. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="mailto:contact@birthdaylink.com" className="hover:text-birthday-gold text-sm">Contact</a>
              <a href="https://instagram.com/birthdaylink" className="hover:text-birthday-gold text-sm" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com/birthdaylink" className="hover:text-birthday-gold text-sm" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="/legal" className="hover:text-birthday-gold text-sm">Terms & Privacy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
