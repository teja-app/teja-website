import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { getPostApi } from '@/pages/api/posts';
import { getPostCategryApi } from '@/pages/api/posts/categories';
import { getPostCategoryByIdApi } from '@/pages/api/posts/categories/[id]';

interface Post {
  id: string;
  title: string;
  summary: string;
  featureImage: any;
  slug: string;
}

interface Category {
  _id: any;
  id: string;
  name: string;
  slug: string;
}


export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const postsRes = await getPostApi({
    categoryId: params.id,
  });
  const presentCategoryRes = await getPostCategoryByIdApi(params.id);
  const categoriesRes = await getPostCategryApi();
  const postsData: Post[] = JSON.parse(JSON.stringify(postsRes)) as any;
  const categoriesData: Category[] = JSON.parse(JSON.stringify(categoriesRes)) as any;
  const posts: Post[] = postsData;
  const categories: Category[] = categoriesData;
  const presentCategory: Category = JSON.parse(JSON.stringify(presentCategoryRes)) as any;

  return {
    props: {
      posts,
      categories,
      presentCategory,
    }
  };
};

export default function BlogPage({ posts, categories, presentCategory }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  const postUrl = `https://teja.app/blog/categories/${presentCategory._id}`;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Head>
        <title>{presentCategory.name} | Teja.app Blog</title>

        <link rel="canonical" href={postUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={presentCategory.title} />
        <meta property="og:description" content={presentCategory.description} />
        <meta property="og:url" content={postUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={presentCategory.title} />
        <meta property="og:description" content={presentCategory.description} />
      </Head>


      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li>
            <div className="flex items-center">
            <Link href="/blog" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Blog</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <Link href={`/blog/categories/${presentCategory._id}`} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"> {presentCategory.name}</Link>
            </div>
          </li>
        </ol>
      </nav>

      <h2 className="text-2xl font-bold mb-4">{presentCategory.name}</h2>
      <div className="grid gap-8 mb-8">
        <blockquote className="text-xl italic font-semibold text-right text-gray-900">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>{presentCategory.description}</p>
        </blockquote>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map((post: Post) => {
          const featureImage = "https://f000.backblazeb2.com/file/swayam-dev-master/" + post?.featureImage?.sizes?.thumbnail?.filename;
          return (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={featureImage || '/default-thumbnail.png'} alt={post.featureImage?.alt || 'Default Image'} className="w-full h-auto" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="mt-2">{post.summary}</p>
                </div>
              </div>
            </Link>
          )
        }
        )}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Categories</h2>
      <ul className="flex flex-wrap gap-2">
        {categories.map((category: Category) => (
          <Link key={category.id} href={`/blog/categories/${category._id}`}>
            <li className="bg-gray-200 rounded-full px-4 py-1">
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
