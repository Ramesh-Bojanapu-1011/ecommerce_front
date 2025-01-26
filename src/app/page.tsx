'use client';
import Footer from '@/components/Footer';
import Headder from '@/components/Headder';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        //  preloader.remove();
        setIsClient(true);
      });
    }
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <Headder />
          <Footer />
        </>
      ) : (
        <>
          <div id="preloader"></div>
        </>
      )}
    </>
  );
}
