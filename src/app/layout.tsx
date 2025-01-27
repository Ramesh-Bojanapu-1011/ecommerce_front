'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import '../../styles/globals.css';
import { useEffect, useState } from 'react';

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
        <meta
          name="google-site-verification"
          content="fs3fI4RT8B2j8VUznZ2Lcuuzim3ucHDUWh0rHgeUe54"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isClient && <>{children}</>}
      </body>
    </html>
  );
}
