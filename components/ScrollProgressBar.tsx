'use client'
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';


const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)

  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;