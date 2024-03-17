import React, { Fragment } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Serialize } from '@/components/serialize';
import './serialize.css';

export async function fetchBlogPost(slug: String) {
  // const response = await fetch(`https://payload-gjbfgxwajq-el.a.run.app/api/posts/slug/}`);

  const response = await fetch(`http://localhost:3000/api/posts/${slug}`);
  if (!response.ok) {
    throw new Error('Blog post not found');
  }
  return response.json();
}


const BlogPost = ({ post }: any) => {
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
  const post = await fetchBlogPost(params.slug);
  return {
    props: { post },
  };
};

export default BlogPost;