import './globals.css';
import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
// import { Analytics } from "@vercel/analytics/react"

const jura = Jura({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Faizan Raza - Full Stack Developer',
  description: 'Building scalable web applications using React, TypeScript, Node.js, and MongoDB.',
  authors: [{ name: 'Faizan Raza', url: 'https://faizan-raza.vercel.app/' }],
  keywords: [
    'Faizan Raza',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Web Developer',
    'JavaScript',
    'TypeScript',
    'Portfolio'
  ],
  openGraph: {
    title: 'Faizan Raza - Full Stack Developer',
    description: 'Building scalable web applications using React, TypeScript, Node.js, and MongoDB.',
    url: 'https://faizan-raza.vercel.app/',
    siteName: 'Faizan Raza',
    images: [
      {
        url: '/profilebanner.png',
        width: 1200,
        height: 630,
        alt: 'Faizan Raza - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jura.className}>
      {children}
      {/* <Analytics /> */}
      </body>
    </html>
  );
}