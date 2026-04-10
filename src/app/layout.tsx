export const metadata = {
  title: "Farhan Ahmed - Web Developer",
  description: "Modern Web Developer specializing in React & Next.js",
  keywords: ["Web Developer", "Next.js", "React Developer", "Portfolio", "Farhan Ahmed", "Farhan Ahmed Tech"],
  authors: [{ name: "Farhan Ahmed" }],
  metadataBase: new URL("https://farhanahmed.vercel.app"),
};

import './globals.css';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import { ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';

const space = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap', 
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body className={`${space.className} bg-[#0d0e12] text-white min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}