// components/common/RevealSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const RevealSection = ({ children, delay = 0.1 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
