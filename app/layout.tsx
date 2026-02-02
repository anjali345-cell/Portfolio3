import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anjali - Frontend Developer',
  description: 'Portfolio of Anjali, a passionate Frontend Developer specializing in MERN stack. Building beautiful and responsive web applications.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Web Development', 'MERN Stack', 'Portfolio'],
  authors: [{ name: 'Anjali' }],
  openGraph: {
    title: 'Anjali - Frontend Developer',
    description: 'Portfolio of Anjali, a passionate Frontend Developer specializing in MERN stack.',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anjali - Frontend Developer',
    description: 'Portfolio of Anjali, a passionate Frontend Developer specializing in MERN stack.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
