import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 bg-white/95 backdrop-blur fixed top-0 left-0 z-50">
        <a
          href="#about"
          className="font-bold text-xl tracking-tight text-gray-900 focus:outline-none focus:ring-2 ring-gray-400 transition"
        >
          Kushall Saraf
        </a>
        <ul className="space-x-6 flex text-base">
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 ring-gray-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 ring-gray-400"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 ring-gray-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 ring-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
