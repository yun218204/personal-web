import React from "react";
export default function Contact() {
  return (
    <>
      <footer className="footer" id="contact">
        <h2>YUNA CHEN</h2>
        <p>如果你想進一步交流，歡迎透過以下方式聯絡我！</p>

        <div className="contact-info">
          <p>
            Email：
            <a href="mailto:chen02964129@gmail.com">chen02964129@gmail.com</a>
          </p>
          <p>
            GitHub：
            <a
              href="https://github.com/yun218204"
              target="_blank"
              rel="noopener noreferrer"
            >
              yun218204
            </a>
          </p>
          <p>
            LinkedIn：
            <a
              href="https://www.linkedin.com/in/ci-yun-chen-7072722a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看我的 LinkedIn
            </a>
          </p>
        </div>

        <p className="thanks">
          ✨感謝您的觀看✨
          <br />
          期待未來有機會與您合作
        </p>
      </footer>
    </>
  );
}
