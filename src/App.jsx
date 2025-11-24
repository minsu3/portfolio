import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;