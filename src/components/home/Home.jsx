import React from "react";
import photo from "../../assets/photos/384.jpg";
import TextChange from "./TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20">
      {/* Left Section */}
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-2xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-xl mt-4 text-gray-300 leading-relaxed">
          I craft responsive and interactive web experiences using modern frontend technologies like ReactJS, HTML5, and CSS3. With a strong passion for clean UI/UX and performance optimization, I build user-friendly solutions that bring ideas to life.
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Let's Connect
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-2/5 mb-10 md:mb-0">
        <img className="rounded-xl shadow-lg w-full" src={photo} alt="Ayush Mahapatra" />
      </div>
    </div>
  );
};

export default Home;
