import { useEffect, useState } from "react";

// 每個作品都是一筆資料，未來新增作品時只需要在這裡增加物件，
// 不需要複製整段畫面元件。
const projects = [
  {
    id: "travel-planner",
    label: "作品展示",
    title: "旅遊小手冊",
    subtitle: "旅程管理工具",
    introduction: "從旅程建立、每日行程、花費紀錄到人工智慧輔助規劃，將旅行中分散的資訊整理成一個容易使用的數位工具。",
    technologies: ["Vue 3", "TypeScript", "Supabase", "Netlify Functions", "Gemini API"],
    slides: [
      {
        title: "旅程總覽 Dashboard",
        imageName: "01-dashboard.png",
        description: "將目前旅程、出發倒數、今日行程與旅程花費集中在同一個畫面，讓使用者一打開就能掌握旅程狀態。",
        problem: "解決旅遊資訊分散在不同頁面，使用者難以快速確認下一步的問題。",
        technology: "利用 Vue 3 建立旅程儀表板，並透過 Supabase 整合行程與花費資料。搭配 RWD 設計，讓使用者在手機上也能快速掌握旅程狀態。",
      },
      {
        title: "每日行程與目前進度",
        imageName: "02-itinerary.png",
        description: "用時間軸呈現每日安排，依照目前時間標記進行中的行程，並支援地圖連結與手機操作。",
        problem: "解決傳統行程表不容易看出現在該做什麼，以及行程進度不明確的問題。",
        technology: "利用 Vue 3 動態判斷目前時間，並以時間軸元件標示行程進度。搭配 Google Maps 連結，讓使用者能直接查看下一個目的地。",
      },
      {
        title: "AI 行程規劃與旅途中助手",
        imageName: "03-ai-assistant.png",
        description: "透過 Gemini AI 產生每日行程草稿，也能在旅途中用聊天助手詢問行程、花費與一般旅遊問題。",
        problem: "解決規劃旅程需要花很多時間，以及旅途中臨時查詢不方便的問題。",
        technology: "透過 Gemini API 產生每日行程建議，並提供旅途中問答功能。使用 Netlify Functions 保護 API 金鑰，建立較安全的 AI 請求流程。",
      },
      {
        title: "花費管理與貨幣換算",
        imageName: "04-expense-currency.png",
        description: "記錄旅程中的每筆花費，並使用免費匯率 API 協助換算不同幣別，方便掌握旅遊預算。",
        problem: "解決旅途中使用不同貨幣，難以快速估算總花費的問題。",
        technology: "利用 Supabase 儲存每筆旅程花費，並依照日期與類別整理支出。串接匯率 API 完成多幣別換算，協助使用者掌握整體預算。",
      },
    ],
  },
  // 未來新增作品時，在這裡增加同樣格式的作品資料即可。
];

function ProjectCard({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const currentSlide = project.slides[currentIndex];

  // 切換截圖時重新嘗試載入下一張圖片。
  useEffect(() => {
    setImageError(false);
  }, [currentIndex]);

  const changeSlide = (direction) => {
    setCurrentIndex((index) => (index + direction + project.slides.length) % project.slides.length);
  };

  return (
    <article className="travel-showcase-card">
      <div className="travel-showcase-media">
        {!imageError ? (
          <img
            key={currentSlide.imageName}
            className="travel-screenshot"
            src={`/image/${project.id}/${currentSlide.imageName}`}
            alt={`${project.title}：${currentSlide.title}`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="travel-screenshot-placeholder">
            <span className="travel-screenshot-number">0{currentIndex + 1}</span>
            <strong>截圖預留位置</strong>
            <small>請放入：public/image/{project.id}/{currentSlide.imageName}</small>
          </div>
        )}
      </div>

      <div className="travel-showcase-copy">
        <p className="travel-showcase-step">{String(currentIndex + 1).padStart(2, "0")} / {String(project.slides.length).padStart(2, "0")}</p>
        <h3>{currentSlide.title}</h3>
        <p>{currentSlide.description}</p>
        <div className="travel-showcase-problem">
          <span>解決的問題</span>
          <p>{currentSlide.problem}</p>
        </div>
          <p className="travel-showcase-tech-note">{currentSlide.technology}</p>
      </div>

      <div className="travel-showcase-controls">
        <button type="button" onClick={() => changeSlide(-1)} aria-label="上一張作品截圖">←</button>
        <div className="travel-showcase-dots" aria-label="作品截圖切換">
          {project.slides.map((slide, index) => (
            <button key={slide.imageName} type="button" className={index === currentIndex ? "active" : ""} onClick={() => setCurrentIndex(index)} aria-label={`查看第 ${index + 1} 張作品截圖`} />
          ))}
        </div>
        <button type="button" onClick={() => changeSlide(1)} aria-label="下一張作品截圖">→</button>
      </div>
    </article>
  );
}

export default function TravelPlannerShowcase() {
  return (
    <div className="travel-projects" id="travel-planner">
      <section className="project-list-heading">
        <h2>Project List</h2>
      </section>

      <section className="travel-showcase">
        {projects.map((project) => (
          <div className="project-entry" key={project.id}>
            <div className="travel-showcase-heading">
              <div>
                <p className="travel-showcase-eyebrow">{project.label}</p>
                <h2>
                  {project.title}
                  <span className="travel-showcase-project-number">01</span>
                </h2>
                <p className="travel-showcase-subtitle">{project.subtitle}</p>
              </div>
              <p className="travel-showcase-intro">{project.introduction}</p>
            </div>

            <ProjectCard project={project} />

            <div className="travel-showcase-tech">
              <div><span>使用技術</span><strong>{project.technologies.join(" · ")}</strong></div>
              <div><span>作品目標</span><strong>讓旅程規劃、執行與花費管理集中在同一個地方</strong></div>
            </div>
          </div>
        ))}
      </section>

      <section className="travel-more-projects" aria-label="更多作品">
        <span>More projects</span>
        <h2>更多作品開發中</h2>
      </section>
    </div>
  );
}
