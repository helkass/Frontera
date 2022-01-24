import { Footer } from "../components/post/Footer";
import Link from "next/link";
import Head from "next/head";
export default function posts() {
  return (
    <>
      <Head>
        <title>Frontera &ndash;Post</title>
      </Head>
      <Link href="/">
        <a>
          <h1 className="flex justify-self-start uppercase font-extrabold p-4 text-2xl border-b-2 lg:p-9">
            Frontera
          </h1>
        </a>
      </Link>
      <div className="container mx-auto grid lg:grid-cols-8 gap-4 my-6">
        <div className="lg:col-span-5">
          <h2 className="font-semibold text-2xl text-center px-6">
            As a Former Poor Person, Grocery Shopping Still Makes Me Anxious
          </h2>
          <p className="text-sm opacity-60 font-semibold text-center mt-3">
            Jun, 15 2020
          </p>
          <p className="opacity-80 text-md font-bold mb-3 text-center mt-5">
            Lessons in poverty never leave us
          </p>
          <div className="m-5 lg:m-0 md:m-8">
            <img src="/assets/age-faster.jpeg" />
          </div>
          <article className="mt-8">
            <h3 className="text-xl font-semibold">The Great Merge</h3>
            <p className="tracking-wider mt-4 px-3 lg:px-0 md:px-0">
              I haven’t posted on Medium for a while. Thank you for your
              patience. Between having a three-year-old, a full holiday season,
              and a lovely and full start to the new year, it was time to sit
              down and share some thoughts with you all once again. I’m usually
              introspective when the year ends and a new year begins. It’s a
              good time to take stock and examine where I am in regard to my
              relationships. We, humans, are both blessed and cursed in that
              ability… Trees and animals don’t compare themselves to other
              members of their species, but we do. We’re unique in that way and
              it’s an essential part of what makes me human. So I embrace it.
              Especially at this time of the year, because my yearly review also
              includes my relationship with and — in some cases — dependency on
              technology. Over the past 35 years, I’ve gone from being a
              technology novice to a hobbyist, to an enthusiast and evangelist,
              to a paid technology professional at a Fortune 100 company, to
              becoming an advocate for privacy & security, to now writing
              columns and newsletters about technology so that as many people as
              possible can educate themselves. This past year, I finally made
              peace with the understanding that our species is determined and
              well on its way to merging our humanity with our technology.
              That’s kind of a big statement, so let me unpack it a bit.
            </p>
          </article>
        </div>
        <div className="lg:col-span-3 mb-3 lg:mt-36">
          <div className="mx-2 mt-6">
            <h5 className="font-bold">DISCOVER MORE OF WHAT MATTERS TO YOU</h5>
            <ul className="flex-wrap flex mt-5">
              <li className="border border-red-400 rounded-md px-3 py-1 mt-1 mr-2 bg-red-200">
                self
              </li>
              <li className="border border-red-400 rounded-md px-3 py-1 mt-1 mr-2 bg-red-200">
                Relationships
              </li>
              <li className="border border-red-400 rounded-md px-3 py-1 mt-1 mr-2 bg-red-200">
                Data Science
              </li>
              <li className="border border-red-400 rounded-md px-3 py-1 mt-1 mr-2 bg-red-200">
                Programming
              </li>
              <li className="border border-red-400 rounded-md px-3 py-1 mt-1 mr-2 bg-red-200">
                Productivity
              </li>
              <li className="border border-red-400 rounded-md px-3 py-1 mt-1 mr-2 bg-red-200">
                Javacript
              </li>
              <li className="border border-red-400 rounded-md px-3 py-1 mt-1 mr-2 bg-red-200">
                Machine Learning
              </li>
              <li className="border border-red-400 rounded-md px-3 py-1 mt-1 mr-2 bg-red-200">
                Health
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
