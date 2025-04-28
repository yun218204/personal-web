import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="me_pic fade-in delay-0">
        <img src="/image/me.png" alt="me" />
        <h2>About Me</h2>
      </div>
      <div className="me_text fade-in delay-0">
        <div className="text_box">
          <p>
            我是一名熱愛學習的前端工程師，目前專注於前端相關技術的學習，也同時涉獵後端與資料庫的基礎知識。
          </p>
          <p>
            過去曾在國際醫療團隊工作，這段期間養成了細心與團隊協作的能力，於是開始接觸前端開發。
          </p>
          <p>
            我喜歡在編碼中探索程式的浪漫，享受透過程式解決問題與良好使用者體驗的過程。
          </p>
          <p>
            目前正在尋找初階前端工程師的機會，期望能在實務中快速成長，成為能獨立開發並擅長團隊合作的工程師
          </p>
        </div>
      </div>
    </>
  );
}
