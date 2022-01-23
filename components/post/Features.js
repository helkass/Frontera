import Link from "next/link";

export const Features = ({ img, tittle, shortDescription, date }) => {
  return (
    <div className="grid lg:grid-cols-6 lg:my-8 md:my-4 mx-4 lg:mx-0">
      <div className="lg:col-span-4 lg:min-h-56 lg:mr-6">
        <Link href="/posts">
          <a>
            <img src={img} className="max-w-screen" />
          </a>
        </Link>
      </div>
      <div className="lg:col-span-2 lg:min-h-56 my-4">
        <Link href="/posts">
          <a>
            <h2 className="font-extrabold mb-1 lg:mb-3">{tittle}</h2>
          </a>
        </Link>
        <p className="opacity-75 text-sm mb-2 lg:mb-3">{date}</p>
        <tittle>{shortDescription}</tittle>
      </div>
    </div>
  );
};
