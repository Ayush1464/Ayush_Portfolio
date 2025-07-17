import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

const ContactForm = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 w-full px-4 md:px-20 text-white py-20"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-orange-400 text-center drop-shadow-lg">
      Get In Touch
    </h2>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
      <input
        type="text"
        placeholder="Your Name"
        className="bg-transparent border-b-2 border-orange-400 focus:outline-none focus:border-orange-500 placeholder-orange-300 text-white py-3 transition"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="bg-transparent border-b-2 border-orange-400 focus:outline-none focus:border-orange-500 placeholder-orange-300 text-white py-3 transition"
      />
      <textarea
        rows="5"
        placeholder="Your Message"
        className="md:col-span-2 bg-transparent border-b-2 border-orange-400 focus:outline-none focus:border-orange-500 placeholder-orange-300 text-white py-3 transition"
      ></textarea>
      <button
        type="submit"
        className="md:col-span-2 w-fit bg-orange-500 hover:bg-orange-600 text-white font-medium text-base px-6 py-2 mt-4 rounded shadow transition mx-auto"
      >
        Send Message
      </button>
    </form>
  </motion.div>
);

const Background = () => (
  <>
    <ambientLight intensity={0.6} />
    <pointLight position={[10, 10, 10]} color="#FFA500" />
    <Stars radius={120} depth={60} count={1500} factor={4} fade speed={1} />
  </>
);

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Canvas */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <Background />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Contact;
