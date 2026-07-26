const experiences = [
  {
    role: "Undergraduate Research Intern",
    company:
      "DataVISards · Hong Kong University of Science and Technology (HKUST)",
    date: "May 2026 – Present",
    meta: "Supervisor: Arpit Narechania · Funded by the University of Toronto",
    description:
      "Contributing to research on natural-language interfaces for authoring and styling data visualizations.",
    highlights: [
      "Extended an NL4DV demonstration with multi-provider LLM support and multimodal visualization styling workflows.",
      "Conducted adversarial testing across languages and datasets to identify JSON-contract, model-output, and Vega-Lite reliability issues.",
      "Developing a multilingual ReVISit user study with localized questionnaires, RTL support, and adaptive visualization layouts.",
    ],
    links: [
      {
        label: "NL4DV",
        href: "https://github.com/nl4dv/nl4dv",
      },
      {
        label: "ReVISit",
        href: "https://github.com/revisit-studies/study",
      },
    ],
  },
  {
    role: "Community Director",
    company: "University of Toronto Mississauga Residence Council (UTMRC)",
    date: "January 2025 – May 2025",
    meta: undefined,
    description: undefined,
    highlights: [],
    links: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="page">
        <p className="section-label">② Experience</p>
        <div className="experience-list">
          {experiences.map((item) => (
            <div key={`${item.role}-${item.company}`} className="experience-item">
              <span className="experience-dot" aria-hidden="true" />
              <div className="experience-content">
                <p className="experience-role">{item.role}</p>
                <p className="experience-company">{item.company}</p>
                {item.meta && <p className="experience-meta">{item.meta}</p>}
                {item.description && (
                  <p className="experience-description">{item.description}</p>
                )}
                {item.highlights.length > 0 && (
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
                {item.links.length > 0 && (
                  <div className="experience-links">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <p className="experience-date">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
