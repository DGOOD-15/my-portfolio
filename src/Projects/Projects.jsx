import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Projects.css";
import travelLog from "../assets/travel-log.png";
import wtwr from "../assets/WTWR.png";
import spots from "../assets/spots.png";
import ucas from "../assets/ucas.png";

function Projects() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card1InView = useInView(card1Ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const card2InView = useInView(card2Ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const card3InView = useInView(card3Ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const card4InView = useInView(card4Ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="projects">
      <h2 className="projects__title">Featured Projects</h2>
      <div className="projects__container">
        <motion.a
          href="https://dgood-15.github.io/TravelLog/"
          target="_blank"
          className="projects__card"
          ref={card1Ref}
          initial="hidden"
          animate={card1InView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <img src={travelLog} alt="Travel Log" className="projects__image" />
          <div className="projects__overlay">
            <h3 className="projects__name">Travel Log</h3>
            <p className="projects__desc">
              Interactive map app for storing travel memories.
            </p>
            <p className="projects__tech">React · JavaScript · CSS</p>
          </div>
        </motion.a>
        <motion.a
          href="https://wtwr.mine.bz/"
          target="_blank"
          className="projects__card"
          ref={card2Ref}
          initial="hidden"
          animate={card2InView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <img src={wtwr} alt="What to Wear" className="projects__image" />
          <div className="projects__overlay">
            <h3 className="projects__name">What to Wear</h3>
            <p className="projects__desc">
              Full Stack Weather-based outfit recommendation app.
            </p>
            <p className="projects__tech">
              React · JavaScript · CSS · Express.js · MongoDB · Postman · ESLint
            </p>
          </div>
        </motion.a>
        <motion.a
          href="https://dgood-15.github.io/se_project_spots/"
          target="_blank"
          className="projects__card"
          ref={card3Ref}
          initial="hidden"
          animate={card3InView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <img src={spots} alt="Spots App" className="projects__image" />
          <div className="projects__overlay">
            <h3 className="projects__name">Spots</h3>
            <p className="projects__desc">
              An image sharing interactive social media web application.
            </p>
            <p className="projects__tech">HTML · JavaScript · CSS</p>
          </div>
        </motion.a>
        <motion.a
          href="https://undercloudsandsurveillance.com/"
          target="_blank"
          className="projects__card"
          ref={card4Ref}
          initial="hidden"
          animate={card4InView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <img
            src={ucas}
            alt="Under Clouds and Surveillance"
            className="projects__image"
          />
          <div className="projects__overlay">
            <h3 className="projects__name">Under Clouds and Surveillance</h3>
            <p className="projects__desc">
              A local rock band's website I built and maintain.
            </p>
            <p className="projects__tech">React · JavaScript · CSS</p>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

export default Projects;
