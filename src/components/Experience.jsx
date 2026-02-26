// import React from "react";

// export default function Experience() {
//   return (
//     <>
//       <div className="timeline-section">
//         <h2 className="timeline-title" id="experience">
//           Experience
//         </h2>

//         <div className="timeline">
//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-content">
//               <h3>2024.12 - 2025.05</h3>
//               <h4 style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/zh/thumb/3/31/Institute_for_Information_Industry.svg/1200px-Institute_for_Information_Industry.svg.png"
//                   style={{
//                     width: "16px",
//                     height: "16px",
//                     marginRight: "8px",
//                     objectFit: "contain",
//                   }}
//                   alt="資策會Logo"
//                 />
//                 資策會前端工程師養成班
//               </h4>
//               <p>個人專題製作</p>
//               <p>團隊協作專題</p>
//               <p>前、後端與資料庫技能學習</p>
//               <p>版本控制</p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-content">
//               <h3>持續學習中</h3>
//               <h4 style={{ display: "flex", alignItems: "center" }}>
//                 {" "}
//                 <img
//                   src="https://www.filepicker.io/api/file/hAiaQlWeT3yuLGHENBKS"
//                   style={{
//                     width: "20px",
//                     height: "20px",
//                     marginRight: "8px",
//                     objectFit: "contain",
//                   }}
//                   alt="太一Logo"
//                 />
//                 六角學院
//               </h4>
//               <p>前端工程師課程</p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-content">
//               <h3>持續學習中</h3>
//               <h4 style={{ display: "flex", alignItems: "center" }}>
//                 {" "}
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"
//                   style={{
//                     width: "20px",
//                     height: "20px",
//                     marginRight: "8px",
//                     objectFit: "contain",
//                   }}
//                   alt="太一Logo"
//                 />
//                 Udemy
//               </h4>
//               <p>全端工程師課程</p>
//             </div>
//           </div>
//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-content">
//               <h3>2024.06 - 2024.12</h3>
//               <h4 style={{ display: "flex", alignItems: "center" }}>
//                 {" "}
//                 <img
//                   src="https://media.licdn.com/dms/image/v2/C560BAQE2l2JcvLdZpg/company-logo_200_200/company-logo_200_200/0/1677248536190?e=2147483647&v=beta&t=CjbEk6scyLGWxr3XrHOpg8j3BOAFn3yTkuQeMQSf-gA"
//                   style={{
//                     width: "20px",
//                     height: "20px",
//                     marginRight: "8px",
//                     objectFit: "contain",
//                   }}
//                   alt="太一Logo"
//                 />
//                 太一全球救援 - 市場部
//               </h4>
//               <p>成功洽談並簽約 5 間合作醫院，擴大病患轉診資源與服務據點</p>
//               <p>每月協助約 １０ 位病患完成轉介流程，提升整體服務滿意度</p>
//               <p>定期關懷與回訪合作醫院，維護良好合作關係並即時掌握轉介狀況</p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-content">
//               <h3>2022.12 - 2024.04</h3>
//               <h4 style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src="https://www.wqp-water.com.tw/wp-content/uploads/2022/04/bwt_logo.png"
//                   style={{
//                     width: "25px",
//                     height: "25px",
//                     marginRight: "8px",
//                     objectFit: "contain",
//                   }}
//                   alt="太一Logo"
//                 />
//                 拓霖股份有限公司 - 行政
//               </h4>
//               <p>
//                 協助處理跨部門合作需求，並維護良好窗口關係以確保專案順利進行
//               </p>
//               <p>定期聯繫百貨與通路部門，追蹤商品上架、促銷活動及庫存狀況</p>
//               <p>彙整與更新產品資料，並協助內部報表製作，提升溝通效率</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";

export default function Experience() {
  return (
    <div className="experience-section" id="experience">
      <div className="experience-header-wrap">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">
          Full-stack development experience and front-end focused practice.
        </p>
      </div>

      <div className="experience-list">
        {/* 數突科技 */}
        <div className="experience-card">
          <div className="experience-card-top">
            <div className="experience-badge">2025.06 - Present</div>

            <div className="experience-main">
              <h3 className="experience-role">全端軟體工程師</h3>
              <div className="experience-company">數突科技</div>
            </div>
          </div>

          <div className="experience-chips">
            <span className="chip">Vue</span>
            <span className="chip">API</span>
            <span className="chip">DB</span>
            <span className="chip">Swagger</span>
            <span className="chip">Git</span>
          </div>

          <div className="experience-body">
            <ul>
              <li>負責前後端功能開發與系統維護，確保功能穩定上線</li>
              <li>RESTful API 設計與串接，處理資料流與錯誤回應</li>
              <li>資料庫 CRUD 操作與資料結構規劃，維持資料一致性</li>
              <li>使用 Swagger 進行 API 測試與除錯，提升整合效率</li>
              <li>Git 版本控制與團隊協作，配合開發流程進行交付</li>
              <li>問題追蹤與效能優化，改善使用體驗與系統穩定度</li>
            </ul>
          </div>
        </div>

        {/* 資策會 */}
        <div className="experience-card">
          <div className="experience-card-top">
            <div className="experience-badge">2024.12 - 2025.05</div>

            <div className="experience-main">
              <h3 className="experience-role">前端工程師養成班</h3>
              <div className="experience-company">資策會</div>
            </div>
          </div>

          <div className="experience-chips">
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">JavaScript</span>
            <span className="chip">React</span>
            <span className="chip">RWD</span>
          </div>

          <div className="experience-body">
            <ul>
              <li>個人專題製作：從需求拆解到功能完成與部署</li>
              <li>團隊協作專題：分工開發、整合測試與版本控制流程</li>
              <li>前端、後端與資料庫整合實作，熟悉 API 串接與資料處理</li>
              <li>建立 Git 協作習慣，培養可維護的開發流程</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
