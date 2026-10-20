import React from "react";

const technologies = ["Vue", "API", "DB", "Swagger", "Git"];

const responsibilities = [
  "負責前後端功能開發與系統維護，確保功能穩定上線",
  "RESTful API 設計與串接，處理資料流與錯誤回應",
  "資料庫 CRUD 操作與資料結構規劃，維持資料一致性",
  "使用 Swagger 進行 API 測試與除錯，提升整合效率",
  "Git 版本控制與團隊協作，配合開發流程進行交付",
  "問題追蹤與效能優化，改善使用體驗與系統穩定度",
];

export default function Experience() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title" id="experience">
        Experience
      </h2>
      <p className="timeline-subtitle">
        Full-stack development experience.
      </p>

      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-content">
            <div className="experience-header">
              <span className="experience-period">2025.06 - Present</span>
              <div className="experience-role">
                <h3>全端軟體工程師</h3>
                <p>數突科技</p>
              </div>
            </div>

            <div className="experience-tags" aria-label="使用技術">
              {technologies.map((technology) => (
                <span className="experience-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <ul className="experience-list">
              {responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
