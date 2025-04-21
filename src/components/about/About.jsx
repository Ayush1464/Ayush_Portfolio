import React from "react";
import photo from "../../assets/photos/384.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="about"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-xl p-12 "
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold ">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-8">
          <img className="md:h-80 rounded-lg" src={photo} alt="Ayush Mahapatra" />
          <ul className="mt-6 md:mt-0">
            {/* Frontend Developer */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a Frontend Developer, I specialize in creating intuitive and
                  visually appealing web interfaces. With proficiency in HTML, CSS,
                  JavaScript, and modern frontend frameworks like ReactJS, I ensure
                  seamless user experiences and optimized performance across all devices.
                  I focus on clean, responsive design, integrating dynamic content,
                  and enhancing interactivity with smooth animations and transitions.
                </p>
              </span>
            </div>

            {/* Java Full Stack Developer */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Java Full Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a Java Full Stack Developer, I bring expertise in both frontend and
                  backend development. With experience in Java, Spring Boot, and RESTful
                  APIs, I build robust, scalable web applications. On the frontend, I use
                  technologies like React to deliver seamless user interfaces while leveraging
                  Java on the backend to build efficient and secure services.
                </p>
              </span>
            </div>

            {/* React Developer */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  React Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a React Developer, I focus on building fast and dynamic web applications
                  with ReactJS. With a deep understanding of component-based architecture, state
                  management, and hooks, I create highly interactive and responsive user
                  interfaces. I also have experience with tools like Redux for state management and
                  React Router for seamless navigation in complex applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
