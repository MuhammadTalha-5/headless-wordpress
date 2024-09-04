"use client";

import { GET_POSTS_QUERY } from "@/queries/getPostsQuery";
import { useQuery } from "@apollo/client";
import client from "@/apolloClient";

export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY,{client});
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="bg-slate-300 w-full">
      <div className="flex items-center justify-between">
        <h1>Posts</h1>
        <ul>
          {data.posts.nodes.map((post: any) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <a href={`/posts/${post.slug}`}>Read more</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
