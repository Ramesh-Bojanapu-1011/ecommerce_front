'use client';
import Footer from '@/components/Footer';
import Headder from '@/components/Headder';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div>
          <Headder />
          <Footer />
        </div>
      )}
    </>
  );
}
