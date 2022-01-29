import { useState } from "react";
import mockPosts from "../../utilities/posts.json";
import Link from "next/link";

export default function Card() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 lg:gap-5 border-t-2 lg:py-4 m-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="lg:mt-2 mt-4 mb-6 lg:mb-3 grid grid-cols-2 md:grid-cols-none lg:grid-cols-none"
          >
            <Link href="/posts">
              <a>
                <img
                  className="lg:mb-4 h-32 lg:h-48 lg:w-full object-cover"
                  src={post.img}
                />
              </a>
            </Link>
            <div className="lg:mt-4 md:mt-3">
              <Link href="/post/1">
                <a>
                  <tittle className="font-bold text-xl mt-5">
                    {post.tittle}
                  </tittle>
                </a>
              </Link>
              <p className="opacity-50 font-bold mb-3">
                {post.shortDescription}
              </p>
              <p className="text-sm opacity-60">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(mockPosts);
  const dataPost = await res.json();

  return {
    props: {
      dataPost,
    },
  };
}