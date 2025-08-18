import "./Projects.css";
import travelLog from "../assets/travel-log.png";
import wtwr from "../assets/WTWR.png";
import spots from "../assets/spots.png";
import ucas from "../assets/ucas.png";

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__title">Featured Projects</h2>
      <div className="projects__container">
        <a
          href="https://dgood-15.github.io/TravelLog/"
          target="_blank"
          className="projects__card"
        >
          <img src={travelLog} alt="Project 1" className="projects__image" />
          <div className="projects__overlay">
            <h3 className="projects__name">Travel Log</h3>
            <p className="projects__desc">
              Interactive map app for storing travel memories.
            </p>
            <p className="projects__tech">React · JavaScript · CSS</p>
          </div>
        </a>

        <a
          href="https://wtwr.mine.bz/"
          target="_blank"
          className="projects__card"
        >
          <img src={wtwr} alt="What to Wear" className="projects__image" />
          <div className="projects__overlay">
            <h3 className="projects__name">What to Wear</h3>
            <p className="projects__desc">
              Full Stack Weather-based outfit recommendation app.
            </p>
            <p className="projects__tech">
              React · JavaScript · CSS · Express.js · MongoDB · Postman · ESLint
            </p>
          </div>
        </a>

        <a
          href="https://dgood-15.github.io/se_project_spots/"
          target="_blank"
          className="projects__card"
        >
          <img src={spots} alt="Spots App" className="projects__image" />
          <div className="projects__overlay">
            <h3 className="projects__name">Spots</h3>
            <p className="projects__desc">
              An image sharing interactive social media web application.
            </p>
            <p className="projects__tech"> HTML · JavaScript · CSS</p>
          </div>
        </a>

        <a
          href="https://undercloudsandsurveillance.com/"
          target="_blank"
          className="projects__card"
        >
          <img
            src={ucas}
            alt="Under Clouds and Surveillance"
            className="projects__image"
          />
          <div className="projects__overlay">
            <h3 className="projects__name">Under Clouds and Surveillance</h3>
            <p className="projects__desc">
              A local rock band's website I built and maintain.
            </p>
            <p className="projects__tech">React · JavaScript · CSS</p>
          </div>
        </a>
      </div>
    </section>
  );
}
