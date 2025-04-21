import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl md:text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg">
        Ayush Mahapatra
      </span>

      <ul
        className={` ${
          menu ? "block" : "hidden"
        } mt-4 py-2 font-semibold bg-black px-2 rounded-xl 
      bg-opacity-30 text-center md:mt-0 md:bg-transparent md:static md:mx-0 md:flex md:gap-6`}
      >
        <a href="#about">
          <li className="text-md transition-all duration-300 p-1 mdLp-0">
            About
          </li>
        </a>
        <a href="#experience">
          <li className="text-md transition-all duration-300 p-1 mdLp-0">
            Experience
          </li>
        </a>
        <a href="#projects">
          <li className="text-md transition-all duration-300 p-1 mdLp-0">
            Projects
          </li>
        </a>
        <a href="#footer">
          <li className="text-md transition-all duration-300 p-1 mdLp-0">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(false);
            setShowMenu(false);
          }}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(true);
            setShowMenu(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
