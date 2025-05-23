import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar fade-in delay-0">
      <div className="navbar_logo">
        <a href="/" className="logo">
          <img
            src="/yunlogo_32x32.svg"
            alt="logo"
            style={{ width: 100, height: 100 }}
          />
        </a>
        <span className="text_logo" style={{ fontSize: "2rem" }}>
          YunaChen's
          <br />
          Portfolio
        </span>
      </div>
      <div className="navbars_items">
        <a href="#aboutme">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
