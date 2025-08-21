import { useEffect, useState, useCallback } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import Main from "./Main/Main";
import SplashScreen from "./SplashScreen/SplashScreen";
import "./App.css";

function App() {
  const [init, setInit] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [fadeOutLoading, setFadeOutLoading] = useState(false);
  const [fadeInMain, setFadeInMain] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("Initializing tsParticles engine");
      await loadAll(engine);
    }).then(() => {
      console.log("tsParticles engine initialized");
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (!init) return;

    const resizeCanvas = () => {
      const canvas = document
        .getElementById("tsparticles")
        ?.querySelector("canvas");
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [init]);

  const particlesLoaded = async (container) => {
    console.log("Particles loaded:", container);
  };

  const handleTypingComplete = useCallback(() => {
    console.log("Typing completed, starting fade-out");
    const fadeTimer = setTimeout(() => {
      setFadeOutLoading(true);
    }, 1000); // Wait 1s before fading out
    const hideLoadingTimer = setTimeout(() => {
      setShowLoading(false);
      setFadeInMain(true);
    }, 2000); // Hide splash after 2s, show main

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideLoadingTimer);
    };
  }, []);

  const options = {
    background: {
      color: "#1a1a1a", // Dark background to match neon theme
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#39ff14", "#ffffff"], // Neon green and white stars
      },
      shape: {
        type: "star",
      },
      opacity: {
        value: { min: 0.5, max: 1 },
        random: true,
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="app">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      )}
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
