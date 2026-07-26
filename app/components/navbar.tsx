"use client";

import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="nav">
      <a href="#" className="nav-logo">
        Kushall Saraf
      </a>
      <nav className="nav-links" aria-label="Main">
        <a href="#projects">Projects</a>
        <span className="nav-dot" aria-hidden="true">
          ·
        </span>
        <a href="#experience">Experience</a>
        <span className="nav-dot" aria-hidden="true">
          ·
        </span>
        <a href="#skills">Skills</a>
        <span className="nav-dot" aria-hidden="true">
          ·
        </span>
        <a href="#contact">Contact</a>
      </nav>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle color theme"
      >
        <Sun className="theme-icon-light" size={15} aria-hidden="true" />
        <Moon className="theme-icon-dark" size={15} aria-hidden="true" />
      </button>
    </header>
  );
}
