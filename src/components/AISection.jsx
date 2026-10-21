import React from "react";

const scenarios = [
  { title: "從零開始開發功能", intro: "從需求釐清開始，逐步完成一個實用且可驗證的功能。", steps: ["需求探索", "規格與驗收條件", "架構規劃", "AI 協作開發", "驗證與 Review"] },
  { title: "既有系統優化與重構", intro: "先理解既有系統，再用安全、漸進的方式完成修改。", steps: ["分析既有系統", "影響範圍分析", "架構方案", "漸進式實作", "回歸測試"] },
  { title: "AI 輔助除錯與根因分析", intro: "跨越各個系統層次追蹤證據，找出真正的問題原因。", steps: ["定義問題", "追蹤資料流", "建立假設", "證據驗證", "修正與回歸"] },
  { title: "AI 輔助測試與品質保證", intro: "把需求轉化成完整的測試覆蓋，保護下一次版本發布。", steps: ["設計測試情境", "準備測試資料", "自動化執行", "分析結果", "測試報告"] },
];

export default function AISection() {
  const [active, setActive] = React.useState(0);
  const scenario = scenarios[active];

  return (
    <section className="ai-section" id="ai-development">
      <div className="ai-heading">
        <p className="ai-kicker">AI-ASSISTED DEVELOPMENT</p>
        <h2>用 AI 協助<br /><span>更好的工程實作</span></h2>
        <p>AI 是工作夥伴，目前正在致力於如何與AI當好朋友!</p>
      </div>
      <div className="ai-tabs" role="tablist" aria-label="AI 開發情境">
        {scenarios.map((item, index) => <button key={item.title} className={active === index ? "active" : ""} onClick={() => setActive(index)} role="tab" aria-selected={active === index}>0{index + 1}</button>)}
      </div>
      <article className="ai-card" key={scenario.title}>
        <div className="ai-card-copy"><h3>{scenario.title}</h3><p>{scenario.intro}</p><strong>工作流程</strong></div>
        <div className="ai-flow">{scenario.steps.map((step, index) => <div className="ai-step" key={step}><span>0{index + 1}</span><b>{step}</b>{index < scenario.steps.length - 1 && <i>↓</i>}</div>)}</div>
      </article>
      <div className="ai-principles">
        <div><p className="ai-kicker">HOW I COLLABORATE WITH AI</p><h3>先建立上下文。<br />拆成小步驟。<br />保留人的判斷。</h3></div>
        <div className="ai-principle-list">
          <p><b>01　先建立上下文</b><br />提供問題、限制條件與系統背景，讓 AI 能提出真正有用的建議。</p>
          <p><b>02　小步驟，清楚結果</b><br />把工作拆成容易檢查的階段，每一步都有明確產出。</p>
          <p><b>03　人為判斷與驗證</b><br />把 AI 產生的程式視為草稿，測試它、質疑它，並負責最後決定。</p>
        </div>
      </div>
    </section>
  );
}

