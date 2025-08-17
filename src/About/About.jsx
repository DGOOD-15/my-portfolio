import "./About.css";
import profilePic from "../assets/ProfilePic.jpg";

export default function About() {
  return (
    <section class="about">
      <div class="about__container">
        <div class="about__image-wrapper">
          <img src={profilePic} alt="Dustin Goodwin" class="about__image" />
        </div>
        <div class="about__content">
          <h2 class="about__title">About Me</h2>
          <p class="about__text">
            I’m Dustin Goodwin, a front-end developer who crafts modern,
            performance-driven applications with clean design and seamless UX.
            My focus is blending code and creativity to build experiences that
            feel both professional and futuristic.
          </p>
        </div>
      </div>
    </section>
  );
}
