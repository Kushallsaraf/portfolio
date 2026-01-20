import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-16 bg-white"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
        Kushall Saraf
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl text-gray-700 mb-8">
        Hi! I'm Kushall, a passionate developer focused on building impactful digital products. I enjoy crafting seamless user experiences and tackling complex problems with creative solutions.
      </p>
      <a
        href="#contact"
        className="inline-block px-8 py-3 rounded-lg bg-gray-900 text-white font-semibold text-lg shadow hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 ring-gray-400"
      >
        Get In Touch
      </a>
    </section>
  );
}