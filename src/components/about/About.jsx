import React from "react";
import photo from "../../assets/photos/384.jpg";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Frontend Developer",
    description:
      "I specialize in creating intuitive and visually appealing web interfaces using HTML, CSS, JavaScript, and ReactJS. I focus on responsive design, dynamic content, and smooth animations.",
  },
  {
    title: "Java Full Stack Developer",
    description:
      "With experience in Java, Spring Boot, and RESTful APIs, I build robust web applications. On the frontend, I use React to deliver seamless user interfaces while the backend ensures efficiency and security.",
  },
  {
    title: "React Developer",
    description:
      "I build fast, component-driven applications using ReactJS. I'm skilled in hooks, context, and tools like Redux and React Router for scalable and interactive UI.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-black px-6 md:px-24 py-20 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-orange-400 mb-12"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.img
          src={photo}
          alt="Ayush Mahapatra"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-72 h-72 object-cover rounded-xl border-4 border-orange-500 shadow-md"
        />

        {/* Description */}
        <ul className="flex-1 space-y-10">
          {roles.map((role, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              <IoArrowForward
                size={28}
                className="text-orange-400 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {role.title}
                </h3>
                <p className="text-md text-gray-300 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
