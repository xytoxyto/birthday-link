import NavBar from '@/components/NavBar';
import AlertContainer from '@/components/AlertContainer';
import { AlertProvider } from '@/context/AlertContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AlertProvider>
          <NavBar />
          <AlertContainer />
          <main>{children}</main>
        </AlertProvider>
      </body>
    </html>
  );
}