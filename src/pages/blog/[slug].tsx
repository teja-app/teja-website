import React, { Fragment } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Serialize } from '@/components/serialize';
import './serialize.css';

export async function fetchBlogPost(slug: String) {
  const response = await fetch(`https://payload-gjbfgxwajq-el.a.run.app/api/posts/slug/${slug}`);
  if (!response.ok) {
    throw new Error('Blog post not found');
  }
  return response.json();
}


const BlogPost = ({ post }: any) => {
  return (
    <article className="mx-auto max-w-5xl prose lg:prose-xl mx-auto px-4 md:px-6 lg:px-8 p-8">
      <Head>
        <title>{post.title} | Teja App Blog</title>
      </Head>
      {/* Use Next.js Image component for optimized images */}

      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-center p-8">
        <img
          src={post.featureImage.sizes.tablet.url}
          alt={post.featureImage.alt}
          className="max-w-lg"
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