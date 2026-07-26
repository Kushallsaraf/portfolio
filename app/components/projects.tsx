import { Github } from "@/app/components/icons";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NL4DV Research & Multilingual Study",
    eyebrow: "Research engineering · DataVISards",
    description:
      "Researching how natural-language interfaces can help people author and style data visualizations across languages.",
    highlights: [
      "Extended the NL4DV demo from an OpenAI-only workflow to support multiple LLM providers through LiteLLM.",
      "Built a multimodal styling workflow using text and example charts, with original-versus-styled comparison and design outcome reporting.",
      "Developing a ReVISit study localized for 25 languages, including RTL experiences and adaptive layouts across 630 chart specifications.",
    ],
    tech: ["Python", "Flask", "LiteLLM", "Vega-Lite", "ReVISit"],
    github: "https://github.com/nl4dv/nl4dv",
    live: "https://revisit.dev/",
    liveLabel: "ReVISit",
    featured: true,
    metric: "25",
    metricLabel: "languages targeted by the study",
  },
  {
    title: "Game Central",
    eyebrow: "Full-stack application",
    description:
      "Built a social gaming discovery platform that helps players find games, receive recommendations, and connect around shared interests.",
    highlights: [
      "Integrated real-time metadata for more than 50,000 games through the RAWG API.",
      "Implemented recommendation and social features using Java and Firebase.",
    ],
    tech: ["Java", "Firebase", "RAWG API", "Git"],
    github: "https://github.com/Kushallsaraf/CSC207-Group-Project.git",
    live: undefined,
    liveLabel: undefined,
    featured: false,
    metric: "50K+",
    metricLabel: "games available to discover",
  },
  {
    title: "MediScan",
    eyebrow: "DeerHacks · 3rd place",
    description:
      "Created a barcode-scanning prototype that compares over-the-counter medication prices and surfaces lower-cost generic alternatives.",
    highlights: [
      "Combined Flask, OpenCV, and barcode data in a working hackathon prototype.",
      "Placed 3rd at DeerHacks among more than 130 participants.",
    ],
    tech: ["Python", "Flask", "OpenCV", "Barcode API"],
    github: "https://github.com/Kushallsaraf/DeerHacks-UTM.git",
    live: undefined,
    liveLabel: undefined,
    featured: false,
    metric: "3rd",
    metricLabel: "place at DeerHacks",
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
              <article
                key={project.title}
                className={`project-card${project.featured ? " project-featured" : ""}`}
              >
                <div className="project-preview">
                  <div className="project-preview-topline">
                    <span>{project.eyebrow}</span>
                    <span>0{projects.indexOf(project) + 1}</span>
                  </div>
                  {project.featured ? (
                    <div className="research-preview">
                      <div className="research-query">
                        <span>Query</span>
                        Show average weight by origin over time
                      </div>
                      <div className="research-chart" aria-hidden="true">
                        {[38, 62, 48, 78, 67].map((height, index) => (
                          <span key={index} style={{ height: `${height}%` }} />
                        ))}
                      </div>
                      <div className="research-languages">
                        <span>English</span>
                        <span>Español</span>
                        <span>العربية</span>
                      </div>
                    </div>
                  ) : (
                    <div className="project-metric">
                      <strong>{project.metric}</strong>
                      <span>{project.metricLabel}</span>
                    </div>
                  )}
                </div>
                <div className="project-body">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
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
                          {project.liveLabel}
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
