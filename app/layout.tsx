import './globals.css';
import type { Metadata } from 'next';
import { Jura } from 'next/font/google';

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
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jura.className}>{children}</body>
    </html>
  );
}