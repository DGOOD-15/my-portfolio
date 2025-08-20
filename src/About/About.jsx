import "./About.css";
import profilePic from "../assets/ProfilePic.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <img src={profilePic} alt="Dustin Goodwin" className="about__image" />
        </div>
        <div className="about__content">
          <h2 className="about__title">About Me</h2>
          <p className="about__text">
            I’m Dustin Goodwin, a Full Stack Software Engineer who crafts
            modern, performance-driven applications with clean design and
            seamless UX. My focus is blending code and creativity to build
            experiences that feel both professional and futuristic.
          </p>
        </div>
      </div>
    </section>
  );
}
