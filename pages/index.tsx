import { NextPage } from "next";
import Head from "next/head";

import { Fragment } from "react";

const metaTitle = "Random Name Generator - World of Names!";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Generate random names for any purpose!"
        />
        <meta
          name="keywords"
          content="random name generator, names, generator"
        />
        <meta property="og:title" content={metaTitle} />
        <meta
          property="og:description"
          content="Generate random names for any purpose!"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />

        <title>{metaTitle}</title>
      </Head>

      <main>
        <div className="h-[100vh] justify-center items-center flex">
          <p>main page</p>
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
