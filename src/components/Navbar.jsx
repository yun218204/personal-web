import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

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
          YunChen's
          <br />
          Portfolio
        </span>
      </div>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <div className={`navbars_items ${isOpen ? "open" : ""}`}>
        <a href="#aboutme" onClick={closeMenu}>About Me</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}

