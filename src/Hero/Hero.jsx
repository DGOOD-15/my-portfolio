import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import About from "../About/About";
import "./Hero.css";

function Hero() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const aboutVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Dustin Goodwin</h1>
        <h2 className="hero__subtitle">Full Stack Software Engineer</h2>
        <p className="hero__tagline"></p>
        <div className="hero__scroll-indicator"></div>
      </div>
      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={aboutVariants}
      >
        <About />
      </motion.div>
    </section>
  );
}

export default Hero;
