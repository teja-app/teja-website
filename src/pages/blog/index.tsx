import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPostApi } from '../api/posts';
import { getPostCategryApi } from '../api/posts/categories';

interface ImageSizes {
  thumbnail?: {
    filename: string;
    width: number;
    height: number;
  };
}

interface FeatureImage {
  alt: string;
  sizes: ImageSizes;
}

interface Post {
  id: string;
  title: string;
  summary: string;
  featureImage: FeatureImage;
  slug: string;
}

interface Category {
  _id: string; // Assuming _id is a string as commonly used with MongoDB
  id: string;
  name: string;
  slug: string;
}

// Assuming getPostApi and getPostCategryApi return promises that resolve to an array of Posts and Categories respectively
export const getServerSideProps: GetServerSideProps = async () => {
  const postsRes = await getPostApi({});
  const categoriesRes = await getPostCategryApi();
  const posts: Post[] = JSON.parse(JSON.stringify(postsRes));
  const categories: Category[] = JSON.parse(JSON.stringify(categoriesRes));

  return {
    props: {
      posts,
      categories,
    },
  };
};

export default function BlogPage({ posts, categories }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Head>
        <title>Blog | Teja App</title>
      </Head>
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map((post: Post) => {
          // Use optional chaining to safely access nested properties
          const featureImage = post.featureImage.sizes.thumbnail ? `https://f000.backblazeb2.com/file/swayam-dev-master/${post.featureImage.sizes.thumbnail.filename}` : '/default-thumbnail.jpg'; // Provide a default thumbnail URL as fallback
          return (
            <Link key={post.id} href={`/blog/${post.slug}`}  className="bg-white rounded-lg shadow-md overflow-hidden block">
                {post?.featureImage?.sizes?.thumbnail && (
                  <Image
                    src={featureImage}
                    alt={post.featureImage.alt}
                    width={post.featureImage.sizes.thumbnail.width} 
                    height={post.featureImage.sizes.thumbnail.height} 
                    objectFit="cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{post?.title}</h3>
                  <p className="mt-2">{post?.summary}</p>
                </div>
            </Link>
          );
        })}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Categories</h2>
      <ul className="flex flex-wrap gap-2">
        {categories.map((category: Category) => (
          <Link key={category._id} href={`/blog/categories/${category._id}`} className="bg-gray-200 rounded-full px-4 py-1 block">
            {category?.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
