import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";
import logo from "../../assets/photos/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap bg-[#131217] justify-between items-center text-white px-10 pt-6 md:px-20 py-4 border-b-4 border-orange-500">
      <span className="text-xl md:text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg">
        <img src={logo} alt="Logo" className="h-12 md:h-16 object-contain" />
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mt-4 py-2 font-semibold bg-black px-2 rounded-xl bg-opacity-30 text-center md:mt-0 md:bg-transparent md:static md:mx-0 md:flex md:gap-6`}
      >
        <a href="#about">
          <li className="text-md transition-all duration-300 p-1">About</li>
        </a>
        <a href="#experience">
          <li className="text-md transition-all duration-300 p-1">Experience</li>
        </a>
        <a href="#projects">
          <li className="text-md transition-all duration-300 p-1">Projects</li>
        </a>
        <a href="#footer">
          <li className="text-md transition-all duration-300 p-1">Contact</li>
        </a>
      </ul>

      {/* Toggle Icon */}
      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
