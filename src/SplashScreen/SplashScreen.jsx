import React, { useState, useEffect, useRef, memo } from "react";
import "./SplashScreen.css";

const FULL_TEXT = "< Full Stack Software Engineer />";
const ANIMATION_DELAY = 1500; // 3s etch + 1.75s lasers

function SplashScreen({ fadeOut, onTypingComplete }) {
  const [typedText, setTypedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const indexRef = useRef(0);

  // Wait until name + lasers finish before typing starts
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, ANIMATION_DELAY);

    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!startTyping) return;

    const typingSpeed = 120;
    const interval = setInterval(() => {
      if (indexRef.current >= FULL_TEXT.length) {
        clearInterval(interval);
        onTypingComplete(); // notify parent (App.js)
        return;
      }

      setTypedText(FULL_TEXT.slice(0, indexRef.current + 1));
      indexRef.current++;
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [startTyping, onTypingComplete]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <svg
        className="etch-text"
        viewBox="0 0 1000 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="etch-text__text"
        >
          Dustin Goodwin
        </text>
        <line
          className="laser-beam laser-beam--left"
          x1="500"
          y1="160"
          x2="0"
          y2="160"
        />
        <line
          className="laser-beam laser-beam--right"
          x1="500"
          y1="160"
          x2="1000"
          y2="160"
        />
      </svg>

      {/* Typing effect appears AFTER name + lasers */}
      <p className="typing-effect" aria-live="polite">
        {typedText}
      </p>
    </div>
  );
}

export default memo(SplashScreen);
