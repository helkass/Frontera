import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Fear of Getting Old Can Make You Age Faster",
      img: "/assets/age-faster.jpeg",
      desc: "A positive perspective on aging predicts better health and longer life",
      date: "Sep, 23 2020",
    },
    {
      id: 2,
      title: "The Case for Staying in the Weeds",
      img: "/assets/weeds.jpeg",
      desc: "Success is usually defined as having lots of people working under you — what if that’s all wrong?",
      date: "Jun, 03 2020",
    },
    {
      id: 3,
      title: "Why Do We Sleep? Science May Have Finally Figured It Out",
      img: "/assets/sleep.jfif",
      desc: "Your brain is equipped with a waste management system that does most of its work while you slumber",
      date: "Jun, 03 2020",
    },
  ]);

  return (
    <section id="blog" className="container mx-auto min-h-max my-24">
      <div className="text-center my-9 text-xl text-red-700 font-semibold">
        <p>My Blog</p>
      </div>
      <div className="grid md:grid-cols-3 md:mx-2 mx-0 sm:grid-cols-2 lg:gap-8 gap-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-neutral-800 min-h-max shadow-sm shadow-red-800 rounded-md mx-4 items-center group overflow-hidden"
          >
            <img
              className="h-3/6 object-cover w-5/12 sm:w-full m-3 sm:m-0"
              src={blog.img}
            />
            <div className="mx-2 sm:h-28">
              <p className="text-slate-300 text-sm mb-2">{blog.date}</p>
              <p className="text-md sm:text-lg">{blog.title}</p>
            </div>
            <div className="text-sm sm:-translate-x-80 group-hover:translate-x-0 text-gray-300 mx-2 sm:text-center transition-all ease-in-out duration-300">
              <p>{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-6 italic text-red-500 text-center text-sm">
        <Link href="/">
          <a>view more ...</a>
        </Link>
      </div>
    </section>
  );
}
