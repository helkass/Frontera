import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className="px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex">
            <span className="self-center text-xl uppercase font-semibold whitespace-nowrap dark:text-white">
              Frontera
            </span>
          </a>
        </Link>
        <button
          onClick={() => {
            setisOpen(!isOpen);
          }}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "left-0" : "-left-full"
          } fixed backdrop-blur-sm md:static md:bg-inherit p-12 md:py-4 md:px-2 transition-all ease-in-out duration-500 text-center bg-white/30 z-20 h-full top-0 w-full md:block md:w-auto`}
        >
          <button
            onClick={() => {
              setisOpen(false);
            }}
            className="md:hidden cursor-pointer absolute right-4 top-4 hover:border-2 hover:rounded-md"
          >
            <svg
              className="w-7 h-7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            </svg>
          </button>
          <ul className="flex flex-col mt-4 text-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li className="hover:scale-150">
              <Link href="/">
                <a
                  className="block py-2 lg:pr-4 md:pr-2 lg:pl-3 md:pl-1"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="hover:scale-125 block py-2 lg:pr-4 md:pr-2 lg:pl-3 md:pl-1 border-gray-100 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="hover:scale-125 block py-2 lg:pr-4 md:pr-2 lg:pl-3 md:pl-1 border-gray-100 "
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:scale-125 block py-2 lg:pr-4 md:pr-2 lg:pl-3 md:pl-1 border-gray-100 "
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:scale-125 block py-2 lg:pr-4 md:pr-2 lg:pl-3 md:pl-1 border-gray-100"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
