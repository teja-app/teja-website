import React, { Fragment } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Serialize } from '@/components/serialize';
import './serialize.css';
import { getPostBySlugApi } from '../api/posts/[slug]';
import { getPostCategoryByIdApi } from '../api/posts/categories/[id]';
import Link from 'next/link';


interface Category {
  _id: any;
  id: string;
  name: string;
  slug: string;
}


const BlogPost = ({ post, postCategory }: any) => {
  const socialImageUrl = "https://f000.backblazeb2.com/file/swayam-dev-master/" + post?.featureImage?.sizes?.thumbnail?.filename;
  const featureImage = "https://f000.backblazeb2.com/file/swayam-dev-master/" + post?.featureImage?.sizes?.tablet?.filename;
  const postUrl = `https://teja.app/blog/${post.slug}`;
  return (
    <article className="mx-auto max-w-5xl prose lg:prose-xl mx-auto px-4 md:px-6 lg:px-8 p-8">
       <Head>
        <title>{post.meta.title} | Teja App Blog</title>
        <meta name="description" content={post.meta.description} />
        <link rel="canonical" href={postUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.meta.title} />
        <meta property="og:description" content={post.meta.description} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={socialImageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.meta.title} />
        <meta name="twitter:description" content={post.meta.description} />
        <meta name="twitter:image" content={socialImageUrl} />
      </Head>
      {/* Use Next.js Image component for optimized images */}

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
              <Link href={`/blog/categories/${postCategory._id}`} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"> {postCategory.name}</Link>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-center p-8">
        <img
          src={featureImage}
          alt={post.featureImage.alt}
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto"
        />
      </div>
      <p className="">{post.summary}</p>

      <div className="no-tailwind-base ">
        <Serialize content={post.content} />
      </div>
    </article>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const postsRes = await getPostBySlugApi(params.slug);
  const post =  JSON.parse(JSON.stringify(postsRes)) as any;
  const postCategoryId = post.categories?.[0];
  const props = {} as any;
  if(postCategoryId){
    const postCategoryRes = await getPostCategoryByIdApi(postCategoryId);
    props.postCategory  = JSON.parse(JSON.stringify(postCategoryRes)) as any;
  }
  props.post = post;
  return {
    props,
  };
};

export default BlogPost;