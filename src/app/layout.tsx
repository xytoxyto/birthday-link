import './globals.css';

export const metadata = {
  title: 'Birthday Link',
  description: 'Never celebrate alone again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="keywords" content="birthday, events, celebration, party, group, RSVP, invite, social, matching, luxury, venues" />
        <meta name="theme-color" content="#6366f1" />
        <meta property="og:title" content="Birthday Link" />
        <meta property="og:description" content="Never celebrate alone again. Find your birthday crew and celebrate in style!" />
        <meta property="og:image" content="/branding/logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://birthday-link.com" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="flex flex-col min-h-screen font-sans bg-brand-gradient text-foreground brand-glow pb-20 md:pb-0">
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-white text-black px-4 py-2 rounded shadow-lg">Skip to main content</a>
        <div className="w-full min-h-screen flex flex-col bg-opacity-90 fancy-border">
          <main id="main-content" tabIndex={-1} aria-label="Main content" aria-live="polite">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
