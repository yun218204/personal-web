import { useState } from "react";
import { engineeringWork } from "../data/engineeringWork";

function EngineeringDiagram({ steps, variant }) {
  const nodeHeight = 48;
  const nodeWidth = 320;
  const gap = 14;
  const startY = 12;
  const height = startY + steps.length * nodeHeight + (steps.length - 1) * gap + 12;

  return (
    <svg
      className={`engineering-diagram engineering-diagram-${variant}`}
      viewBox={`0 0 420 ${height}`}
      role="img"
      aria-label="工程架構與流程示意圖"
    >
      <defs>
        <marker
          id="work-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="4"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#71899a" />
        </marker>
      </defs>

      {steps.map((step, index) => {
        const y = startY + index * (nodeHeight + gap);
        const lines = step.split(" / ");

        return (
          <g key={step}>
            {index > 0 && (
              <line
                className="diagram-arrow"
                x1="210"
                y1={y - gap + 2}
                x2="210"
                y2={y - 5}
              />
            )}
            <rect
              className="diagram-node"
              x={(420 - nodeWidth) / 2}
              y={y}
              width={nodeWidth}
              height={nodeHeight}
              rx="12"
            />
            <text
              className="diagram-node-label"
              x="210"
              y={y + (lines.length > 1 ? 20 : 30)}
            >
              {lines.map((line, lineIndex) => (
                <tspan
                  key={line}
                  x="210"
                  dy={lineIndex === 0 ? 0 : 16}
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWork = engineeringWork[currentIndex];

  const showPrevious = () => {
    setCurrentIndex(
      (previousIndex) =>
        (previousIndex - 1 + engineeringWork.length) % engineeringWork.length
    );
  };

  const showNext = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex + 1) % engineeringWork.length
    );
  };

  return (
    <section className="work-section" id="work">
      <div className="work-layout">
        <div className="work-intro">
          <h2>Selected Engineering Work</h2>
          <p className="work-intro-chinese">工程實務精選</p>
          <p className="work-intro-description">
            目前主要參與企業 Web 系統的開發與維護，工作內容包含前後端串接、API 設計、資料庫操作和問題排查。這裡整理幾個實際接觸過的開發內容。
          </p>
          <div className="work-navigation" aria-label="工程案例切換">
            <button
              className="nav-button"
              type="button"
              onClick={showPrevious}
              aria-label="上一個工程案例"
            >
              ←
            </button>
            <span className="work-index">
              {String(currentIndex + 1).padStart(2, "0")} / {String(engineeringWork.length).padStart(2, "0")}
            </span>
            <button
              className="nav-button"
              type="button"
              onClick={showNext}
              aria-label="下一個工程案例"
            >
              →
            </button>
          </div>
        </div>

        <article className="work-card" key={currentWork.id}>
          <div className="work-diagram">
            <EngineeringDiagram
              steps={currentWork.diagram}
              variant={currentWork.diagramType}
            />
          </div>
          <div className="work-copy">
            <h3>{currentWork.title}</h3>
            <p className="work-description">{currentWork.description}</p>
            <div className="work-tags" aria-label="技術重點">
              {currentWork.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

