import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";

export default function Hero() {
  return (
    <div className="container sm:grid mx-auto sm:grid-cols-2 min-h-max sm:flex-none flex flex-col-reverse">
      <div className="sm:grid-cols-6 z-10 ml-4 sm:ml-0 mt-20 sm:mt-0">
        <div className="md:translate-y-40 text-center sm:translate-y-36 ml-2 sm:text-left">
          <h2 className="uppercase text-xl mb-3">hello i am helka</h2>
          <h1 className="uppercase font-semibold lg:text-3xl text-2xl">
            i am web developer
          </h1>
        </div>
        <div className="flex mt-12 justify-center sm:justify-start sm:translate-y-44 md:translate-y-52 border-none lg:border-l-2 border-red-700 lg:py-5 sm:py-3 py-1 px-1 sm:px-2">
          <Link href="#">
            <a>
              <TiSocialFacebook
                size={35}
                className="lg:mr-6 md:mr-4 mr-2 hover:animate-bounce hover:text-red-700 hover:bg-slate-800 rounded-full p-1"
              />
            </a>
          </Link>
          <Link href="#">
            <a>
              <TiSocialGithub
                size={35}
                className="lg:mr-6 md:mr-4 mr-2 hover:animate-bounce hover:text-red-700 hover:bg-slate-800 rounded-full p-1"
              />
            </a>
          </Link>
          <Link href="#">
            <a>
              <TiSocialLinkedin
                size={35}
                className="lg:mr-6 md:mr-4 mr-2 hover:animate-bounce hover:text-red-700 hover:bg-slate-800 rounded-full p-1"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="sm:grid-cols-6 min-h-max flex justify-center sm:flex-none">
        <img
          className="swing md:w-8/12 opacity-70 w-3/6 object-cover translate-y-10 md:translate-x-6"
          src="/assets/logo.svg"
        />
      </div>
    </div>
  );
}
