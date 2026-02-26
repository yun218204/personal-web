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
            我是全端軟體工程師，具備實務開發經驗，目前工作上負責前後端功能開發、API 串接與系統維護。
          </p>
          <p>
            在前端開發上，專注於架構規劃與使用者體驗優化，熟悉 JavaScript 與Vue框架實作，提升畫面效能與可維護性。
          </p>
          <p>
           在後端方面，具備 API 設計串接與資料庫實務經驗，能規劃資料結構並確保資料一致性，同時熟悉版本控制與團隊協作流程。
          </p> <p>
            我喜歡在編碼中探索程式的浪漫，享受透過程式解決問題與良好使用者體驗的過程。
          </p>
        </div>
      </div>
    </>
  );
}
