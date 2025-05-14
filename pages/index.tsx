import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Fragment } from 'react';
import { toast } from 'sonner';

const metaTitle = 'Random Name Generator - World of Names!';
const metaDescription =
  'Generate random names for any purpose! Whether you need a name for a character, a pet, or anything else, our random name generator has you covered.';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="random name generator, names, generator"
        />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <div className=" flex h-svh  ">
          <Card className="size-full">
            <Link href={'/signin'}>SignInPage</Link>
            <Button onClick={() => toast.warning('hello')}>Show Toast</Button>
          </Card>
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
