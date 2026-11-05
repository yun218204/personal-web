import React from "react";

const scenarios = [
  { title: "需求整理", intro: "先釐清使用者需求與功能目標，再拆解成可以逐步完成的開發任務。", steps: ["整理需求", "拆解功能", "確認優先順序", "建立開發計畫"] },
  { title: "功能開發", intro: "利用人工智慧協助產生初步方案，再由我依照專案架構進行調整與實作。", steps: ["提出功能想法", "討論實作方案", "撰寫程式", "整合現有功能"] },
  { title: "測試與修正", intro: "透過錯誤訊息與實際操作結果找出問題，反覆驗證直到功能穩定。", steps: ["執行功能測試", "分析錯誤原因", "修正程式", "重新驗證"] },
];

export default function AISection() {
  const [active, setActive] = React.useState(0);
  const scenario = scenarios[active];

  return (
    <section className="ai-section" id="ai-development">
      <div className="ai-heading">
        <p className="ai-kicker">人工智慧協作</p>
        <h2>人工智慧協作<br /><span>讓開發更有效率</span></h2>
        <p>我會把人工智慧當成開發夥伴，協助整理想法、比較方案與檢查問題，再由我確認結果並完成實作。</p>
      </div>
      <div className="ai-tabs" role="tablist" aria-label="人工智慧協作流程">
        {scenarios.map((item, index) => (
          <button key={item.title} className={active === index ? "active" : ""} onClick={() => setActive(index)} role="tab" aria-selected={active === index}>0{index + 1} {item.title}</button>
        ))}
      </div>
      <article className="ai-card" key={scenario.title}>
        <div className="ai-card-copy"><h3>{scenario.title}</h3><p>{scenario.intro}</p><strong>由我確認與決策</strong></div>
        <div className="ai-flow">{scenario.steps.map((step, index) => <div className="ai-step" key={step}><span>0{index + 1}</span><b>{step}</b>{index < scenario.steps.length - 1 && <i>↓</i>}</div>)}</div>
      </article>
      <div className="ai-principles">
        <div><p className="ai-kicker">我的協作方式</p><h3>從需求釐清開始<br />逐步驗證結果<br />再完成實際功能</h3></div>
        <div className="ai-principle-list">
          <p><b>01｜先理解問題</b><br />先確認真正要解決的需求，再決定是否需要使用人工智慧。</p>
          <p><b>02｜保留判斷能力</b><br />人工智慧提供建議，我負責檢查安全性、可行性與是否符合專案需求。</p>
          <p><b>03｜實際驗證</b><br />透過測試、錯誤排查與使用者操作，確認功能不是只有看起來能運作。</p>
        </div>
      </div>
    </section>
  );
}
