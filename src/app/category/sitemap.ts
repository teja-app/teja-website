
import { getPostCategryApi } from '@/pages/api/posts/categories';
import { MetadataRoute } from 'next';

export async function generateSitemaps() {
    // Fetch all categories. Adjust the API call as needed.
    const categories = await getPostCategryApi(); // Assuming this returns all categories
    
    let sitemaps = [];
    for (let i = 0; i < categories.length; i++) {
      sitemaps.push({ id: i });
    }
    return sitemaps;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Assuming a flat structure; adjust if your data requires pagination
  const categories = await getPostCategryApi(); // Adjust the API call as needed

  // Map categories to sitemap format
  return categories.map((category: any) => ({
    url: `https://teja.app/blog/categories/${category.id || category._id}`, // Adjust the URL structure as needed
    lastModified: category.updatedAt, // Use your actual field for the last modified date
  }));
}
