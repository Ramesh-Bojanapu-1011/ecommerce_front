import { ThemeProvider } from '@/components/theme/theme-provider';
import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from '@/components/ui/sonner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}

export default MyApp;
