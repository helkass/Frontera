import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";

export default function Hero() {
  return (
    <div className="container grid mx-auto grid-cols-2 h-screen">
      <div className="grid-cols-6">
        <h2 className="uppercase text-xl mb-3 translate-y-52">
          hello i'am helka
        </h2>
        <h1 className="uppercase font-semibold text-3xl translate-y-52">
          i'am web developer
        </h1>
        <div className="flex translate-y-80 border-l-2 border-red-700 lg:py-5 md:py-3 py-2 px-2">
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
      <div className="grid-cols-6">
        <img
          className="w-9/12 h-5/6 object-cover translate-y-10 md:translate-x-6"
          src="/assets/helka.svg"
        />
      </div>
    </div>
  );
}
