"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <header className="nav">
      <a href="#" className="nav-logo">
        KS
      </a>
      <div className="nav-right">
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
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </header>
  );
}
