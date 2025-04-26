import React, { useEffect, useRef } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && lineRef.current) {
          lineRef.current.classList.remove("w-0");
          lineRef.current.classList.add("w-[90%]");
        }
      },
      { threshold: 0.5 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) observer.unobserve(lineRef.current);
    };
  }, []);

  return (
    <footer
      id="footer"
      className="text-white px-6 py-10 md:px-20 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative"
    >
      {/* Animated Horizontal Line */}
      <div
        ref={lineRef}
        className="absolute top-0 left-0 right-0 mx-auto w-0 h-[1px] bg-gray-600 transition-all duration-1000"
      ></div>
      <button className="bg-orange-500 px-2 py-2 rounded-xl">
        Download Resume
      </button>

      {/* Left section */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-orange-500">Contact</h1>
        <p className="text-sm md:text-lg text-white opacity-90">
          Feel free to reach out — I’d love to connect!
        </p>
      </div>

      {/* Contact info */}
      <ul className="text-sm md:text-lg flex flex-col gap-4">
        <li className="flex items-center gap-3">
          <MdOutlineEmail size={22} className="text-white" />
          <span className="hover:underline">ayushmahapatra98@gmail.com</span>
        </li>
        <li className="flex items-center gap-3">
          <MdOutlinePhone size={22} className="text-white" />
          <span>+91 90787 21464</span>
        </li>
        <li className="flex items-center gap-3">
          <CiLinkedin size={22} className="text-white" />
          <a
            href="https://linkedin.com/in/ayush1464"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-200 transition"
          >
            linkedin.com/in/ayush1464
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FaGithub size={22} className="text-white" />
          <a
            href="https://github.com/ayush1464"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-200 transition"
          >
            github.com/ayush1464
          </a>
        </li>
      </ul>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 mt-4 text-center">
        © 2025 Ayush Mahapatra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
