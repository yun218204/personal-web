import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

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
      </main>
    </div>
  );
}

export default App;
