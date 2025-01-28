// pages/[slug].tsx

import { GetStaticProps, GetStaticPaths } from 'next';

export default function Page({ content }: { content: string | null }) {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // Fallback pages can handle nonexistent routes
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params || {};

  const content = slug === 'valid' ? 'This is valid content.' : null;

  console.log(content);

  if (!content) {
    return {
      notFound: true, // Automatically shows the 404 page
    };
  }

  return {
    props: { content },
  };
};
