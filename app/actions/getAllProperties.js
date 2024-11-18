'use server';

import { createAdminClient } from '../../config/appwrite';
// import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function getAllProperties() {
  try {
    const { databases } = await createAdminClient();

    // Fetch rooms
    const { documents: properties } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROPERTIES
    );

    // Revalidate the cache for this path
    // revalidatePath('/');
    // revalidatePath('/');

    return properties;

  } catch (error) {
    console.log('Failed to get rooms', error);
    redirect('/error');
  }
}

export default getAllProperties;
