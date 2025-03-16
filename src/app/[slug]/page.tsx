import { notFound } from 'next/navigation';

export default function Page({ params }: any) {
  // Example logic to validate the slug
  const validSlugs = ['product', 'profile', 'settings'];
  const isValid = validSlugs.includes(params.slug);
  console.log(params.slug);

  if (!isValid) {
    notFound(); // This will render app/not-found.tsx
  }

  return <div>Welcome to the {params.slug} page!</div>;
}
