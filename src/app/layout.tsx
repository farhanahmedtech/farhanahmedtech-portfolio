export const metadata = {
  title: "Farhan Ahmed - Web Developer",
  description: "Modern Web Developer specializing in React & Next.js",
  keywords: ["Web Developer", "Next.js", "React Developer", "Backend Develper", "Mern Stack Developer", "Portfolio", "Farhan Ahmed", "Farhan Ahmed Tech"],
  authors: [{ name: "Farhan Ahmed" }],
  metadataBase: new URL("https://farhanahmed.vercel.app"),
  alternates: {
    canonical: "https://farhanahmed.vercel.app",
  },
  openGraph: {
    title: "Farhan Ahmed Portfolio",
    description: "Web Developer Portfolio",
    url: "https://farhanahmed.vercel.app",
    siteName: "Farhan.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Farhan Ahmed Portfolio",
    description: "Web Developer",
    images: ["/og-image.png"],
  },
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
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Farhan Ahmed",
      url: "https://farhanahmed.vercel.app",
      jobTitle: "Web Developer",
      sameAs: [
        "https://github.com/farhanahmedtech",
        "https://www.linkedin.com/in/farhan-ahmed-tech",
      ],
    }),
  }}
/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}