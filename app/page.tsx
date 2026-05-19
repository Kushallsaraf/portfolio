import Experience from "@/app/components/experience";
import Projects from "@/app/components/projects";
import { Github, Linkedin } from "@/app/components/icons";
import { Mail } from "lucide-react";

const skills = [
  "Python",
  "Java",
  "C",
  "JavaScript",
  "HTML/CSS",
  "SQL",
  "NumPy",
  "Pandas",
  "NLTK",
  "Django",
  "HTMX",
  "Flask",
  "JavaFX",
  "Firebase",
  "Git",
  "OpenCV",
  "NLP",
  "Corpus Linguistics",
  "Sentiment Analysis",
  "Statistical Modelling",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="page">
          <h1 className="hero-name">Kushall Saraf</h1>
          <p className="hero-bio">
            CS undergrad at the University of Toronto studying Computer Science,
            Statistics, and Economics. I build full-stack web apps and enjoy
            working at the intersection of software and data.
          </p>
          <span className="hero-location">Toronto, CA</span>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="[RESUME_URL]" className="btn-ghost" download>
              Download Résumé
            </a>
          </div>
        </div>
      </section>

      <Projects />
      <Experience />

      <section id="skills" className="section">
        <div className="page">
          <p className="section-label">③ Skills</p>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="page">
          <p className="section-label">Contact</p>
          <h2 className="contact-heading">Let&apos;s work together.</h2>
          <p className="contact-text">
            Open to internships, collaborations, or just a conversation. Feel
            free to reach out.
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
        <span>© 2025 Kushall Saraf</span>
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
            href="[LINKEDIN_URL]"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:[YOUR_EMAIL]"
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
