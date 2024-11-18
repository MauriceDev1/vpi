import React from 'react'; // Ensure React is imported for JSX if not using Next.js or React 17+
import { PropertyCard } from '../components/PropertyCard';
import { TitleBar } from '../components/TitleBar';
import getAllProperties from './actions/getAllProperties';

export default async function Home() {
  const properties = await getAllProperties();
  return (
    <>
      <TitleBar title="Property Investment App" />
      {properties && properties.length > 0 ? (
        properties.map((p) => <PropertyCard key={p.$id} room={p} />)
      ) : (
        <p>There are currently no properties available</p>
      )}
    </>
  );
};
