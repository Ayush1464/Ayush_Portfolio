import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

import RevealSection from "./components/RevealSection";
import Background3D from "./components/Background3D";

const App = () => {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* 3D background behind everything */}
      <Background3D />

      {/* Content above 3D background */}
      <div className="relative z-10">
        <Navbar />
        <RevealSection><Home /></RevealSection>
        <RevealSection delay={0.1}><About /></RevealSection>
        <RevealSection delay={0.2}><Experience /></RevealSection>
        <RevealSection delay={0.3}><Projects /></RevealSection>
        <RevealSection delay={0.4}><Contact /></RevealSection>
        <Footer />
      </div>
    </div>
  );
};

export default App;
