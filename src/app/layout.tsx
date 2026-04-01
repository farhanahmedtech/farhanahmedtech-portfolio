import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';

const space = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap', 
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${space.className} bg-[#0d0e12] text-white min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

