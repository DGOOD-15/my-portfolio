import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingScreen.css";

function LoadingScreen() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-screen__beams">
        <div className="loading-screen__beam loading-screen__beam--left"></div>
        <div className="loading-screen__beam loading-screen__beam--right"></div>
      </div>

      <svg
        className="loading-screen__text"
        viewBox="0 0 1000 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          DUSTIN GOODWIN
        </text>
      </svg>

      <p className="loading-screen__title">Full Stack Software Engineer</p>
    </div>
  );
}

export default LoadingScreen;
