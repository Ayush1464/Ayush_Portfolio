import React from "react";
import ProjectCards from "./ProjectCards";
import opiglo from "../../assets/photos/image1.png";
import waveiq from "../../assets/photos/image2.png";
import ntpl from "../../assets/photos/image.png";

const Projects = () => {
  return (
    <div id="projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCards demoLink="https://opiglo.co.za" title="Opiglo" main="Built a robust fleet management web application enabling real-time vehicle tracking, maintenance scheduling, and analytics. Developed using ReactJS with dynamic UI components for logistics insights." image={opiglo}/>
        <ProjectCards demoLink="https://waveiq.in" title="WaveIq" main="Developed a web-based test application where users can take various assessments and track their performance. Integrated an LMS for seamless learning management, including progress tracking and course management features." image={waveiq} />
        <ProjectCards demoLink="https://ayush1464.github.io/Ntpl/" title="NTPL" main="Designed and developed a modern portfolio website for NTPL, showcasing the company’s services, expertise, and case studies. Focused on clean design, user experience, and SEO optimization using React and Tailwind." image={ntpl} />

      </div>
    </div>
  );
};

export default Projects;
