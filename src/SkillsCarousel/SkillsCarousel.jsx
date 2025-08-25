import React, { useRef, useEffect, useState } from "react";
import "./SkillsCarousel.css";

export default function SkillsCarousel() {
  const logos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg", alt: "Chrome DevTools" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", alt: "Bash" },
    { src: "https://cdn.simpleicons.org/bem", alt: "BEM" },
    { src: "https://cdn.simpleicons.org/prettier", alt: "Prettier" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", alt: "Postman" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", alt: "Jest" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg", alt: "ESLint" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", alt: "Nginx" },
    { src: "https://cdn.simpleicons.org/pm2", alt: "pm2" },
    { src: "https://avatars.githubusercontent.com/u/49699333?s=200&v=4", alt: "Certbot" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", alt: "Webpack" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
  ];

  const doubledLogos = [...logos, ...logos];
  const trackRef = useRef(null);
  const [animationDistance, setAnimationDistance] = useState(0);

useEffect(() => {
    if (trackRef.current) {
      // Get width of half the track (one set of logos)
      const singleSetWidth = trackRef.current.scrollWidth / 2;
      setAnimationDistance(singleSetWidth);
    }
  }, []);

  return (
    <div className="skills__carousel">
      <h2 className="skills__title">Skills</h2>
      <div
        className="carousel__track"
        ref={trackRef}
        style={{
          animation: `scrollLeft ${30}s linear infinite`,
          "--scroll-distance": `${animationDistance}px`,
        }}
      >
        {doubledLogos.map((logo, index) => (
          <div className="skill__icon" key={index}>
            <img src={logo.src} alt={logo.alt} />
            <p>{logo.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}