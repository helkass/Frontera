import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiX } from "react-icons/bi";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="container mx-auto flex justify-between py-4 px-4 md:px-0">
      <h1 className="text-xl font-bold text-white uppercase">frontera</h1>
      <button
        onClick={() => setisOpen(!isOpen)}
        className="focus:outline-none text-white block lg:hidden md:hidden"
      >
        <FaBars size={20} className={!isOpen ? "block" : "hidden"} />
        <BiX size={25} className={isOpen ? "block" : "hidden"} />
      </button>
      <ul className={`${isOpen ? "block" : "hidden"} text-white md:flex`}>
        <li className="mr-4">
          <a href="/">Home</a>
        </li>
        <li className="mr-4">
          <a href="#about">About</a>
        </li>
        <li className="mr-4">
          <a href="#works">Works</a>
        </li>
        <li className="mr-4">
          <Link href="/posts">
            <a>Blog</a>
          </Link>
        </li>
        <li className="mr-4">
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </div>
  );
}
