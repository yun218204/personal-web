import React from "react";

export default function Banner() {
  return (
    <div className="banner_text">
      <img src="/image/banner.jpg" alt="banner" className="fade-in delay-1" />
      <div className="right_text fade-in delay-2">
        <p className="text_name">YunaChen</p>
        <p>前端開發者 / Frontend Engineer</p>
        <p>在編碼中探索程式的浪漫</p>
        <button>
          <a href="#aboutme">了解更多我</a>
        </button>
        <br />
        <button>
          <a href="https://github.com/yun218204?tab=repositories">Github</a>
        </button>
      </div>
    </div>
  );
}
