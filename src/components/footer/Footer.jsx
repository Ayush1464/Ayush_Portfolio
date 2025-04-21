import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#465697] text-white px-6 py-10 md:px-20 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
    >
      {/* Left section */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact</h1>
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
    </footer>
  );
};

export default Footer;
