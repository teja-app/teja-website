import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { getPostApi } from '../api/posts';
import { getPostCategryApi } from '../api/posts/categories';
import Image from 'next/image';

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
  
  
export const getServerSideProps: GetServerSideProps = async () => {
    const postsRes = await getPostApi({});
    const categoriesRes = await getPostCategryApi();
    const postsData: Post[]  =  JSON.parse(JSON.stringify(postsRes)) as any;
    const categoriesData: Category[]  = JSON.parse(JSON.stringify(categoriesRes)) as any;
    const posts: Post[] = postsData;
    const categories: Category[] = categoriesData;
    
    return { props: { 
      posts,
      categories 
    } };
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
          const featureImage = "https://f000.backblazeb2.com/file/swayam-dev-master/" + post?.featureImage?.sizes?.thumbnail?.filename;
          return (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="w-full"
                src={featureImage}
                alt={post.featureImage.alt}
                width={400} // Specify the width of the image (example value)
                height={300} // Specify the height of the image (example value)
                objectFit="cover" // Adjust how the image fits into its container
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-2">{post.summary}</p>
              </div>
            </div>
          </Link>
        )}
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
