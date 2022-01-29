import { useState } from "react";

export default function Works() {
  const [works, setWorks] = useState([
    {
      title: "React.Js Next.Js",
      desc: "Make website with React and Next js fullstack fullstack",
    },
    {
      title: "Fullstack with Laravel",
      desc: "Fullstack with Laravel framework and Mysql for database",
    },
    {
      title: "Wordpress Developer",
      desc: "Make beautifull website with wordpress and responsible",
    },
    {
      title: "Designing with figma",
      desc: "Unique and beautiful UI/UX",
    },
    {
      title: "Vue Js",
      desc: "Front end web application with Vue js",
    },
  ]);

  return (
    <section className="min-h-max relative">
      <div className="container mx-auto">
        <div className="min-h-max">
          <h2 className="text-red-700 font-semibold text-center text-lg">
            What I Do
          </h2>
          <div className="flex md:mt-12 mt-8">
            <div className="grid grid-cols-2 mx-3 sm:mx-0 sm:grid-cols-3 items-center gap-5">
              {works.map((work) => (
                <div className="bg-neutral-900 text-center text-white rounded-br-[30px] rounded-tl-[30px] group overflow-hidden shadow-3d">
                  <div className="w-full h-28 text-xl py-9">
                    <p className=" mx-auto tracking-wide">{work.title}</p>
                  </div>
                  <div className="text-md bg-red-600 tracking-wide h-0 group-hover:h-12 md:px-4 transition-all duration-300 ease-in-out">
                    <p>{work.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
