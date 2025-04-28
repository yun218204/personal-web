import React from "react";

export default function Experience() {
  return (
    <>
      <div className="timeline-section">
        <h2 className="timeline-title" id="experience">
          Experience
        </h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024.12 - 2025.05</h3>
              <h4 style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/zh/thumb/3/31/Institute_for_Information_Industry.svg/1200px-Institute_for_Information_Industry.svg.png"
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "8px",
                    objectFit: "contain",
                  }}
                  alt="資策會Logo"
                />
                資策會前端工程師養成班
              </h4>
              <p>個人專題製作</p>
              <p>團隊協作專題</p>
              <p>前、後端與資料庫技能學習</p>
              <p>版本控制</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>持續學習中</h3>
              <h4 style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <img
                  src="https://www.filepicker.io/api/file/hAiaQlWeT3yuLGHENBKS"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                    objectFit: "contain",
                  }}
                  alt="太一Logo"
                />
                六角學院
              </h4>
              <p>前端工程師課程</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>持續學習中</h3>
              <h4 style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                    objectFit: "contain",
                  }}
                  alt="太一Logo"
                />
                Udemy
              </h4>
              <p>全端工程師課程</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024.06 - 2024.12</h3>
              <h4 style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <img
                  src="https://media.licdn.com/dms/image/v2/C560BAQE2l2JcvLdZpg/company-logo_200_200/company-logo_200_200/0/1677248536190?e=2147483647&v=beta&t=CjbEk6scyLGWxr3XrHOpg8j3BOAFn3yTkuQeMQSf-gA"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                    objectFit: "contain",
                  }}
                  alt="太一Logo"
                />
                太一全球救援 - 市場部
              </h4>
              <p>負責跨部門溝通與資料彙整，培養問題解決思維</p>
              <p>協助團隊與海外醫療單位協作</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2022.12 - 2024.04</h3>
              <h4 style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://www.wqp-water.com.tw/wp-content/uploads/2022/04/bwt_logo.png"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "8px",
                    objectFit: "contain",
                  }}
                  alt="太一Logo"
                />
                拓霖股份有限公司 - 行政
              </h4>
              <p>追蹤管理其他部門報表狀況</p>
              <p>文件彙整與 Excel 報表製作</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
