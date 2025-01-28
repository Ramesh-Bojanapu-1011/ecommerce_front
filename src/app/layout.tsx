'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import '../../styles/globals.css';
import Headder from '@/components/Headder';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        <meta
          name="google-site-verification"
          content="fs3fI4RT8B2j8VUznZ2Lcuuzim3ucHDUWh0rHgeUe54"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isClient && (
          <>
            <Headder />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
