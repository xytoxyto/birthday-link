import './globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'Birthday Link',
  description: 'Never celebrate alone again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <footer className="text-center text-sm text-gray-500 p-4 bg-gray-50">
          &copy; {new Date().getFullYear()} Birthday Link. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
