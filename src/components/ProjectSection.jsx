import { useState } from "react"; // 抓 React 的 useState
import { projects } from "../data/projects";

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0); // 控制現在第幾個專案

  const project = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="project" id="project">
      <div className="project_left">
        <h2>Project List</h2>
        <p>以下是我的實作專案，目前仍持續透過製作專案來學習不同技能。</p>
        <div className="project-navigation">
          <button className="nav-button" onClick={handlePrev}>
            ←
          </button>
          <button className="nav-button" onClick={handleNext}>
            →
          </button>
        </div>
      </div>

      <div className="project_right">
        <img src={project.img} alt={project.title} />
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <button className="project-button">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            查看 Github
          </a>
        </button>
      </div>
    </div>
  );
}
