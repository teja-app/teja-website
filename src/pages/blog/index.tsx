import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

interface ApiResponse<T> {
    docs: T[];
}
  
interface Post {
id: string;
title: string;
summary: string;
featureImage: any;
slug: string;
}

interface Category {
id: string;
name: string;
slug: string;
}
  
  
export const getServerSideProps: GetServerSideProps = async () => {
    const postsRes = await fetch('https://payload-gjbfgxwajq-el.a.run.app/api/posts/');
    const categoriesRes = await fetch('https://payload-gjbfgxwajq-el.a.run.app/api/post_categories/');
    if (!postsRes.ok) {
      throw new Error(`Failed to fetch posts, status: ${postsRes.status}`);
    }
    if (!categoriesRes.ok) {
        throw new Error(`Failed to fetch categories, status: ${categoriesRes.status}`);
    }
  
    const postsData: ApiResponse<Post> = await postsRes.json();
    const categoriesData: ApiResponse<Category> = await categoriesRes.json();
    console.log(`postsData ${postsData.docs[0].featureImage}`);
  
    // Now, you can correctly type the data being passed to your component
    const posts: Post[] = postsData.docs;
    const categories: Category[] = categoriesData.docs;
  
    return { props: { posts, categories } };
};

export default function BlogPage({ posts, categories }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Head>
        <title>Blog | Teja App</title>
      </Head>
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map((post: Post) => (
          <Link href={`/blog/${post.slug}`} >
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.featureImage?.sizes?.thumbnail?.url || '/default-thumbnail.png'} alt={post.featureImage?.alt || 'Default Image'} className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-2">{post.summary}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Categories</h2>
      <ul className="flex flex-wrap gap-2">
        {categories.map((category: Category) => (
          <li key={category.id} className="bg-gray-200 rounded-full px-4 py-1">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
