import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import "./Main.css";

function Main({ fadeIn }) {
  return (
    <main className={`main ${fadeIn ? "fade-in" : ""}`}>
      <Hero />
      <Projects />
    </main>
  );
}

export default Main;
