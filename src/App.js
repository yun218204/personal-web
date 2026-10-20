import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectSection from "./components/ProjectSection";
import ComingSoon from "./components/ComingSoon";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main id="aboutme">
        <AboutMe />
        <Skills />
        <Experience />
        <ProjectSection />
        <ComingSoon />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
