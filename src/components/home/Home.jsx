import React, { useState } from "react";
import photo from "../../assets/photos/384.jpg";
import TextChange from "./TextChange";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width - 0.5) * 20;
    const y = ((e.clientY - bounds.top) / bounds.height - 0.5) * -20;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20">
      {/* Left Section */}
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-2xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-xl mt-4 text-gray-300 leading-relaxed">
          I craft responsive and interactive web experiences using modern
          frontend technologies like ReactJS, HTML5, and CSS3. With a strong
          passion for clean UI/UX and performance optimization, I build
          user-friendly solutions that bring ideas to life.
        </p>
        <div className="space-x-4">
          <button
            className="mt-5 md:mt-10 text-white py-2 px-5 text-sm md:text-lg font-semibold rounded-3xl 
  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
  shadow-lg shadow-pink-500/40 
  transition duration-300 transform hover:scale-105 hover:shadow-pink-400/70"
          >
            Let's Connect
          </button>

          <a
            href="/assets/resume/Ayush_Resume.docx"
            download
            className="inline-flex items-center gap-2 mt-5 md:mt-10 text-white py-2 px-5 text-sm md:text-lg font-semibold rounded-3xl 
    bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 
    shadow-lg shadow-indigo-500/40 
    transition duration-300 transform hover:scale-105 hover:shadow-indigo-400/70"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Section */}
      <motion.div
        className="md:w-2/5 mb-10 md:mb-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000 }}
      >
        <motion.img
          className="w-90 h-90 rounded-full shadow-[0_0_40px_5px_#465697]"
          src={photo}
          alt="Ayush Mahapatra"
          animate={{
            rotateX: rotate.y,
            rotateY: rotate.x,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
