import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { MdWork } from "react-icons/md";
import {  SiSpring, SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <div id="experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
        Experience
      </h1>

      <div className="flex flex-wrap items-start justify-around">
        {/* Skill Icons */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#264de4" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#A259FF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDatabase color="#4DB33D" size={50} />
          </span>

          {/* New Icons */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#007396" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpring color="#6DB33F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 md:w-2/5">
          {/* Dreamwave Innovation */}
          <div className="flex gap-6 bg-slate-950 bg-opacity-50 rounded-lg p-4 items-start">
            <MdWork color="#3B82F6" size={50} />
            <div className="text-white">
              <h2 className="text-lg font-semibold">
                Frontend Developer, Dreamwave Innovation
              </h2>
              <p className="text-sm text-gray-300">
                Nov 2024 – Present | Bhubaneswar, India
              </p>
              <ul className="text-sm p-2 list-disc pl-5 text-gray-400">
                <li>
                  Developed a responsive web platform using ReactJS, improving
                  page load speed by 35%
                </li>
                <li>
                  Integrated APIs to enhance real-time data updates and user
                  engagement
                </li>
                <li>
                  Optimized UI components, reducing user journey complexity by
                  20%
                </li>
              </ul>
            </div>
          </div>

          {/* Nilachala Energy Pvt. Ltd. */}
          <div className="flex gap-6 bg-slate-950 bg-opacity-50 rounded-lg p-4 items-start">
            <SiFreelancer color="#10B981" size={50} />
            <div className="text-white">
              <h2 className="text-lg font-semibold">
                Freelance Frontend Developer, Nilachala Energy Pvt. Ltd.
              </h2>
              <p className="text-sm text-gray-300">
                Aug 2024 – Nov 2024 | Bhubaneswar, India
              </p>
              <ul className="text-sm p-2 list-disc pl-5 text-gray-400">
                <li>
                  Designed and optimized websites using HTML, CSS, JavaScript,
                  and ReactJS
                </li>
                <li>Improved UI/UX and performance of client websites</li>
                <li>
                  Boosted client engagement and online visibility with custom
                  design solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
