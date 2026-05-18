import { Github } from "@/app/components/icons";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "[Project Title]",
    description:
      "[Short description of what this project does and why it matters.]",
    tech: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    github: "#",
    live: "#",
  },
  {
    number: "02",
    title: "[Project Title]",
    description:
      "[Short description of what this project does and why it matters.]",
    tech: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    github: "#",
    live: "#",
  },
  {
    number: "03",
    title: "[Project Title]",
    description:
      "[Short description of what this project does and why it matters.]",
    tech: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="page">
        <p className="section-label">① Projects</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.number} className="project-card">
              <div>
                <p className="project-number">{project.number}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={13} />
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={13} />
                  Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
