import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Dustin Goodwin</h1>
        <h2 className="hero__subtitle">Full Stack Software Engineer</h2>
        <p className="hero__tagline"></p>
        <div className="hero__scroll-indicator"></div>
      </div>
    </section>
  );
}

export default Hero;
