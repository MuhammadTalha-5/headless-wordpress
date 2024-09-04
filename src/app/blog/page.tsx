"use client";

import Link from 'next/link';
import { GET_POSTS_QUERY } from "@/queries/getPostsQuery";
import { useQuery } from "@apollo/client";
import client from "@/apolloClient";

export default function Blog () {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY,{client});
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <section className='bg-gray-500 w-full p-5 py-10'>
        <div className='text-center text-white'>
          <h2 className='text-3xl font-semibold'>Blog Posts</h2>
        </div>
      </section>

      <div className='grid grid-cols-4 gap-4 mt-5 mx-20'>
        {data.posts.nodes.map((post: any) => (
        <div key={post.id} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
          {post.featuredImage?.node?.sourceUrl && (
          <Link href={post.slug}>
            <img
              className='rounded-t-lg'
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              width={post.featuredImage.node.mediaDetails.width}
              height={post.featuredImage.node.mediaDetails.height}
            />
          </Link>
          )}
          <div className='p-5'>
            
              {post.categories.nodes.map((category:any) => (
               <Link href="#" className='text-purple-700 pb-4' key={category.slug}>{category.name}</Link>
              ))}
            <Link href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
              {post.title}
              </h5>
            </Link>
            <p className='mb-3 font-normal text-gray-700' dangerouslySetInnerHTML={{ __html: post.excerpt }}>
            </p>
            <Link
              href='#'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
            >
              Read More
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </Link>
          </div>
        </div>
         ))}
      </div>
    </div>
  )
}
