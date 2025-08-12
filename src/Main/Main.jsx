import Hero from "../Hero/Hero";
import "./Main.css";

function Main({ fadeIn }) {
  return (
    <main className={`main ${fadeIn ? "fade-in" : ""}`}>
      <Hero />
    </main>
  );
}

export default Main;
