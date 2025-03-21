import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import '../components/EmblaCarousel.tsx/embla.css';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'INOX',
  description: 'The best steel construction company in Ukraine',
  // icons: '/icons/favicon-yellow.png',
  icons: '/icons/favicon-gray.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-PFFQJGSSQ1" />
    </html>
  );
}
