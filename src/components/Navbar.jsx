import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="/about">
            <li
              className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
              onClick={closeMenu}
            >
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/skills">
            <li
              className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
              onClick={closeMenu}
            >
              Skills
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/services">
            <li
              className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
              onClick={closeMenu}
            >
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/contact">
            <li
              className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
              onClick={closeMenu}
            >
              Contact
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/projects">
            <li
              className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
              onClick={closeMenu}
            >
              Projects
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-slate-700 lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <Link className="flex text-cyan-600 font-bold m-2" to="/">
            <span className="font-logo text-4xl md:text-5xl lg:text-5xl">
              M
            </span>{" "}
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </span>{" "}
            <span className="font-logo text-4xl md:text-5xl lg:text-5xl">
              G
            </span>
          </Link>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="/about">
                <li className="hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/skills">
                <li className="hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Skills
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/services">
                <li className="hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Services
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/contact">
                <li className="hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Contact
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/projects">
                <li className="hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Projects
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
