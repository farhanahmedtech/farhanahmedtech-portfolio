import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';

const space = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap', // Recommended font display strategy
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`space.className`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}