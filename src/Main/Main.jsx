import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import SkillsCarousel from "../SkillsCarousel/SkillsCarousel";
import "./Main.css";

function Main({ fadeIn }) {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const heroInView = useInView(heroRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className={`main ${fadeIn ? "fade-in" : ""}`}>
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>
      <motion.div
        ref={projectsRef}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <Projects />
      </motion.div>
      <motion.div
        ref={projectsRef}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <SkillsCarousel />
      </motion.div>
    </main>
  );
}

export default Main;
