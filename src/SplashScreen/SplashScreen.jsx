import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const FULL_TEXT = "< Full Stack Software Engineer />";

export default function SplashScreen() {
  const [typedText, setTypedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // Start typing after etch + laser animations complete (6s)
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;
    const typingSpeed = 120;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => {
        if (index >= FULL_TEXT.length) {
          clearInterval(typingInterval);
          return prev;
        }
        const next = FULL_TEXT.slice(0, index + 1);
        index++;
        return next;
      });
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [startTyping]);

  return (
    <div className="splash-screen">
      <svg
        className="etch-text"
        viewBox="0 0 1000 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Dustin Goodwin"
        role="img"
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

        {/* Left laser line from center (500) to left (0) */}
        <line
          className="laser-beam laser-beam--left"
          x1="500"
          y1="160"
          x2="0"
          y2="160"
        />

        {/* Right laser line from center (500) to right (1000) */}
        <line
          className="laser-beam laser-beam--right"
          x1="500"
          y1="160"
          x2="1000"
          y2="160"
        />
      </svg>

      <p className="typing-effect" aria-live="polite">
        {typedText}
      </p>
    </div>
  );
}
