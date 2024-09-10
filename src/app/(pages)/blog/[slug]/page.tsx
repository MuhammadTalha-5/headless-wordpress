"use client";
import React from 'react'
import {GET_POST_BY_SLUG, GET_LATEST_POSTS} from '@/queries/GetPostBySlug';
import Link from 'next/link';
import { useQuery } from "@apollo/client";
import Image from 'next/image';
type Params = {
    params: {
        slug: string;
    };
};



const SinglePost = ({ params }: Params) => {
    const {slug} = params;
    const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
        variables: { slug },
      });

    const {data: latestData } = useQuery(GET_LATEST_POSTS);
    console.log(latestData);
    const latestPosts = latestData?.posts?.nodes || [];
   
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div className='container mx-auto md:px-[130px] py-10 mt-5'>
  <div className='flex flex-col lg:flex-row'>
    {/* Left Column (70%) */}
    <div className='w-full md:w-7/10 lg:pr-8'>
      <h1 className='text-4xl font-bold mb-4'>
        {data.post.title}
      </h1>

      <div className='flex items-center mb-6'>
        <Image
          src={data.post.author.node.avatar.url}
          width={40}
          height={40}
          className='rounded-full'
          alt={data.post.author.node.name}
        />

        <div className='ml-4'>
          <p className='text-sm font-semibold'>{data.post.author.node.name}</p>
        </div>
        {data.post.categories.nodes.map((category:any) => (
          <span className='ml-5 text-sm text-gray-500' key={category.slug}>{category.name}</span>
         ))}
      </div>

      <div className='mb-6'>
        <Image
          src={data.post.featuredImage.node.sourceUrl}
          alt={data.post.featuredImage.node.altText}
          width={data.post.featuredImage.node.mediaDetails.width}
          height={data.post.featuredImage.node.mediaDetails.height}
          className='rounded-lg'
          
        />
      </div>

      <p className='blog-content max-w-none' dangerouslySetInnerHTML={{__html: data.post.content}}></p>

      <div className='py-5 mt-5'>
        <span className='font-bold'>Tags:</span>
        {data.post.tags.nodes.map((tag:any) => (
        <span className='p-2 text-center text-sm bg-gray-600 text-white rounded-lg mx-2' key={tag.slug}>{tag.name}</span>
       ))}
      </div>

      <div className='py-5 '>
        <span className='font-bold'>Published: </span>
        <span>{new Date(data.post.date).toLocaleDateString('en-US',{
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</span>
      </div>
    </div>

    {/* Right Column (30%) */}
    <div className='w-full md:w-3/10 bg-gray-50 rounded-lg text-center p-4'>
  <h2 className='text-xl font-semibold mb-4'>Latest Posts</h2>
  <ul>
    {latestPosts.length > 0 ? latestPosts.map((post: any) => (
      <li key={post.slug} className='flex items-center mb-4'>
        {/* Post Image */}
        <Image 
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText}
          className='w-16 h-16 object-cover rounded-lg mr-4' 
          width={post.featuredImage.node.mediaDetails.width}
          height={post.featuredImage.node.mediaDetails.height}
        />
        
        {/* Post Info */}
        <div className='text-left'>
          {/* Post Title */}
          <Link href={`/blog/${post.slug}`} className='text-md font-medium hover:underline'>
            {post.title}
          </Link>
          
          {/* Post Author and Date */}
          <div className='text-sm text-gray-600 mt-1'>
            <span className='mr-2'>
              <Image 
                src={post.author.node.avatar.url} 
                alt={post.author.node.name} 
                className='inline-block w-5 h-5 rounded-full mr-1' 
                width={40}
                height={40}
              />
              {post.author.name}
            </span>
            <span>
              {new Date(post.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </li>
    )): <p>No recent posts available</p>}
  </ul>
</div>

  </div>
</div>

  )
}

export default SinglePost