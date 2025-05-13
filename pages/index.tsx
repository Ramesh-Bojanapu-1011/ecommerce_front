import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Fragment } from "react";

const metaTitle = "Random Name Generator - World of Names!";
const metaDescription =
  "Generate random names for any purpose! Whether you need a name for a character, a pet, or anything else, our random name generator has you covered.";

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
      <Headder />

      <main>
        <div className="flex justify-center items-center h-screen ">
          <Link href={"/signin"}>SignInPage</Link>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
