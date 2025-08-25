import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Projects.css";
import travelLog from "../assets/travel-log.png";
import wtwr from "../assets/WTWR.png";
import spots from "../assets/spots.png";
import ucas from "../assets/ucas.png";

const projects = [
  {
    href: "https://dgood-15.github.io/TravelLog/",
    img: travelLog,
    alt: "Travel Log",
    name: "Travel Log",
    desc: "Interactive map app for storing travel memories.",
    tech: "React · JavaScript · CSS",
  },
  {
    href: "https://wtwr.mine.bz/",
    img: wtwr,
    alt: "What to Wear",
    name: "What to Wear",
    desc: "Full Stack Weather-based outfit recommendation app.",
    tech: "React · JavaScript · CSS · Express.js · MongoDB · Postman · ESLint",
  },
  {
    href: "https://dgood-15.github.io/se_project_spots/",
    img: spots,
    alt: "Spots App",
    name: "Spots",
    desc: "An image sharing interactive social media web application.",
    tech: "HTML · JavaScript · CSS",
  },
  {
    href: "https://undercloudsandsurveillance.com/",
    img: ucas,
    alt: "Under Clouds and Surveillance",
    name: "Under Clouds and Surveillance",
    desc: "A local rock band's website I built and maintain.",
    tech: "React · JavaScript · CSS",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

function Projects() {
  // Create refs for each card
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  // Use inView for each card, with less negative margin for earlier trigger
  const cardInViews = cardRefs.map(ref =>
    useInView(ref, { once: true, margin: "0px 0px -20px 0px" })
  );

  return (
    <section className="projects">
      <h2 className="projects__title">Featured Projects</h2>
      <div className="projects__container">
        {projects.map((project, i) => (
          <motion.a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card"
            ref={cardRefs[i]}
            key={project.name}
            custom={i}
            initial="hidden"
            animate={cardInViews[i] ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <img src={project.img} alt={project.alt} className="projects__image" />
            <div className="projects__overlay">
              <h3 className="projects__name">{project.name}</h3>
              <p className="projects__desc">{project.desc}</p>
              <p className="projects__tech">{project.tech}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;