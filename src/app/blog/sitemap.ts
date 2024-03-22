import { getPostApi } from '@/pages/api/posts'
import { MetadataRoute } from 'next'
 
export async function generateSitemaps() {
    const totalPosts = await getPostApi({});
    let sitemaps = [];
    for (let i = 0; i < totalPosts.length; i++) {
      sitemaps.push({ id: i });
    }
    return sitemaps;
  }
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostApi({}); // This is pseudo-code, adjust according to your actual API

  return posts.map((post) => ({
    url: `https://teja.app/blog/${post.slug}`,
    lastModified: post.updatedAt, // Adjust based on your date field
  }));
}