import React from "react";
import skillsData from "../data/skills.json";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills_title">Skills</h2>
      <p className="skills_description">以下是我學習並使用過的技術。</p>
      <div className="skills__content">
        {skillsData.map((item, index) => (
          <SkillCard key={index} title={item.title} skills={item.skills} />
        ))}
      </div>
    </section>
  );
}
