import React from "react";

export default function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <ul className="skill-tag-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-tag">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
