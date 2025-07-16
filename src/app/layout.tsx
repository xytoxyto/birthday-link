import './globals.css';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen font-sans bg-brand-gradient text-foreground brand-glow pb-20 md:pb-0">
        <div className="w-full min-h-screen flex flex-col bg-opacity-90 fancy-border">
          {children}
        </div>
      </body>
    </html>
  )
}
