import Experience from "@/app/components/experience";
import Projects from "@/app/components/projects";
import { Github } from "@/app/components/icons";
import { Mail } from "lucide-react";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      "Python",
      "Java",
      "C",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    label: "Web & applications",
    skills: ["React", "Next.js", "Flask", "Django", "HTMX", "Firebase"],
  },
  {
    label: "Data & visualization",
    skills: ["Pandas", "NumPy", "OpenCV", "NLP", "Vega-Lite", "LiteLLM"],
  },
  {
    label: "Tools",
    skills: ["Git", "Figma", "ReVISit", "REST APIs"],
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="page">
          <div className="hero-grid">
            <div className="hero-main">
              <p className="hero-kicker">Software developer · Researcher</p>
              <h1 className="hero-name">
                I build software that makes complex systems easier to use.
              </h1>
              <p className="hero-bio">
                I&apos;m Kushall, a University of Toronto student studying
                Computer Science, Statistics, and Economics. My work spans
                full-stack products, natural-language interfaces, and data
                visualization research.
              </p>
              <div className="hero-ctas">
                <a href="#projects" className="btn-primary">
                  Explore my work
                </a>
                <a
                  href="https://github.com/Kushallsaraf"
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </div>
            </div>
            <aside className="currently-card">
              <div className="currently-status">
                <span aria-hidden="true" />
                Currently
              </div>
              <p className="currently-role">Undergraduate Research Intern</p>
              <p className="currently-org">DataVISards · HKUST</p>
              <p className="currently-focus">
                Developing and evaluating multilingual natural-language
                interfaces for visualization authoring.
              </p>
              <span className="hero-location">Hong Kong · Toronto</span>
            </aside>
          </div>
        </div>
      </section>

      <Projects />
      <Experience />

      <section id="skills" className="section">
        <div className="page">
          <p className="section-label">③ Skills</p>
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <p className="skill-group-label">{group.label}</p>
                <div className="skills-list">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="page">
          <p className="section-label">Contact</p>
          <h2 className="contact-heading">Let&apos;s work together.</h2>
          <p className="contact-text">
            I&apos;m interested in software development, research, and
            collaborative projects where thoughtful engineering can make a
            practical difference.
          </p>
          <a
            href="mailto:kushall.saraf@mail.utoronto.ca"
            className="contact-email"
          >
            kushall.saraf@mail.utoronto.ca
          </a>
        </div>
      </section>

      <footer className="footer page">
        <span>© 2026 Kushall Saraf</span>
        <div className="footer-links">
          <a
            href="https://github.com/Kushallsaraf"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:kushall.saraf@mail.utoronto.ca"
            className="footer-link"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </footer>
    </main>
  );
}
