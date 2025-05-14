import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const metaTitle = 'SignInPage';
const metaDescription =
  'Generate random names for any purpose! Whether you need a name for a character, a pet, or anything else, our random name generator has you covered.';

const SignInPage: NextPage = () => {
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

      <div className="flex justify-center items-center h-screen ">
        <p className=" caret-transparent">SignInPage</p>
      </div>
    </Fragment>
  );
};

export default SignInPage;
