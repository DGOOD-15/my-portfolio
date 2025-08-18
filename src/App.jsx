import React, { useState, useCallback } from "react";
import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine"; // Use tsParticles
import SplashScreen from "./SplashScreen/SplashScreen";
import Main from "./Main/Main";
import "./App.css";

function App() {
  const [fadeOutLoading, setFadeOutLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [fadeInMain, setFadeInMain] = useState(false);

  const handleTypingComplete = useCallback(() => {
    console.log("Typing completed, starting fade-out");
    const fadeTimer = setTimeout(() => {
      setFadeOutLoading(true);
    }, 1000);
    const hideLoadingTimer = setTimeout(() => {
      setShowLoading(false);
      setFadeInMain(true);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideLoadingTimer);
    };
  }, []);

  const particlesInit = async () => {
    console.log("Particles initializing"); // Debug log
    await tsParticles.load({
      id: "tsparticles",
      options: {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
          },
        },
        retina_detect: true,
      },
    });
  };

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container); // Debug log
  };

  return (
    <div className="app-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="particles"
      />
      {showLoading && (
        <SplashScreen
          fadeOut={fadeOutLoading}
          onTypingComplete={handleTypingComplete}
        />
      )}
      <Main fadeIn={fadeInMain} />
    </div>
  );
}

export default App;
