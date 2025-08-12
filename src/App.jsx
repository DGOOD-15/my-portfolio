import "./App.css";
import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import Main from "./Main/Main";

function App() {
  const [fadeOutLoading, setFadeOutLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [fadeInMain, setFadeInMain] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOutLoading(true), 5000);
    const hideLoadingTimer = setTimeout(() => setShowLoading(false), 7500);
    const fadeInMainTimer = setTimeout(() => setFadeInMain(true), 7500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideLoadingTimer);
      clearTimeout(fadeInMainTimer);
    };
  }, []);

  return (
    <>
      {showLoading && <SplashScreen fadeOut={fadeOutLoading} />}
      <Main fadeIn={fadeInMain} />
    </>
  );
}

export default App;
