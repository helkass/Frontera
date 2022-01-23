import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="lg:mx-auto lg:p-2 bg-red-400">
      <div className="flex flex-col lg:flex-row md:flex-row">
        <div className="flex justify-between items-center px-4 py-2 border-b border-red-300 lg:border-b-0">
          <div>
            <a
              href="/"
              className="uppercase font-semibold text-xl text-white hover:text-red-800"
            >
              Frontera
            </a>
          </div>
          <div>
            <button
              onClick={() => setisOpen(!isOpen)}
              className="focus:outline-none text-white block lg:hidden md:hidden"
            >
              <FaBars size={20} className={!isOpen ? "block" : "hidden"} />
              <BiX size={25} className={isOpen ? "block" : "hidden"} />
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex justify-between w-full flex-col md:flex md:flex-row py-4 lg:py-0`}
        >
          <div className="flex flex-col md:flex-row">
            <a
              href="#"
              className="block text-white hover:text-red-700 py-2 lg:py-3 px-4"
            >
              Articles
            </a>
            <a
              href="#"
              className="block text-white hover:text-red-700 py-2 lg:py-3 px-4"
            >
              Guides
            </a>
            <a
              href="#"
              className="block text-white hover:text-red-700 py-2 lg:py-3 px-4"
            >
              Books
            </a>
            <a
              href="#"
              className="block text-white hover:text-red-700 py-2 lg:py-3 px-4"
            >
              More
            </a>
          </div>
          <div className="flex px-4 lg:flex-row py-1">
            <input
              placeholder="Search"
              className=" bg-red-300 rounded-l-md ml-2 pl-2"
            />
            <button className="bg-red-300 rounded-r-md">
              <FiSearch size={23} className="mr-2 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
