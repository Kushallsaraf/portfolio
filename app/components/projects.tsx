import { Github } from "@/app/components/icons";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Game Central",
    description:
      "Full-stack social gaming discovery platform with a recommendation engine, social networking features, and real-time metadata for 50,000+ games.",
    tech: ["Java", "Firebase", "RAWG API", "Git"],
    github: "https://github.com/Kushallsaraf/CSC207-Group-Project.git",
    live: undefined,
  },
  {
    title: "MediScan",
    description:
      "Barcode-scanning app that compares OTC medication prices and suggests cheaper generic alternatives. Won 3rd place at DeerHacks (130+ participants).",
    tech: ["Python", "Flask", "OpenCV", "Barcode API"],
    github: undefined,
    live: undefined,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="page">
        <p className="section-label">① Projects</p>
        <div className="projects-grid">
          {projects.map((project) => {
            const hasLinks = project.github || project.live;

            return (
              <article key={project.title} className="project-card">
                <div className="project-preview">
                  <span className="project-preview-title">{project.title}</span>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {hasLinks && (
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={13} />
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={13} />
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
