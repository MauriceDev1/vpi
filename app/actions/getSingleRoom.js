'use server';

import { createAdminClient } from '../../config/appwrite';
// import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function getSingleProperty(id) {
  try {
    const { databases } = await createAdminClient();

    // Fetch rooms
    const property = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROPERTIES,
      id
    );

    // Revalidate the cache for this path
    // revalidatePath('/', 'layout');

    return property;
  } catch (error) {
    console.log('Failed to get room', error);
    redirect('/error');
  }
}

export default getSingleProperty;
