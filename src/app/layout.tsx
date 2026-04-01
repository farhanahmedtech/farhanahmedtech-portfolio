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

export const metadata = {
  title: "Farhan Ahmed - Web Developer",
  description: "I am a Mern Stack Developer in MogoDB, Express.js, React.js, Node.js and Next.js. View my portfolio and projects.",
  keywords: ["Farhan Ahmed", "Web Developer", "Farhan Ahmed Tech", "Next.js Developer", "Frontend Developer Pakistan"],
};