import React from "react";

const comingSoonMessage = "開發中敬請期待";

export default function ComingSoon() {
  return (
    <section className="project-list-section" id="projects">
      <div className="project-list-card">
     
       
        <p className="project-list-eyebrow" aria-hidden="true">
          Something awesome is brewing...
        </p>
        <h2>Project List</h2>
      
        <p className="coming-soon-message" aria-label={`${comingSoonMessage} ✨`}>
          {Array.from(comingSoonMessage).map((character, index) => (
            <span
              aria-hidden="true"
              key={`${character}-${index}`}
              style={{ "--i": index }}
            >
              {character}
            </span>
          ))}
          <span className="coming-soon-star" aria-hidden="true">
            ✨
          </span>
        </p>
        <p className="project-list-description">
          新的點子正在慢慢成形！
        </p>
      </div>
    </section>
  );
}
