const experiences = [
  {
    role: "Undergraduate Research Intern",
    company:
      "DataVISards · Hong Kong University of Science and Technology (HKUST)",
    date: "May 2026 – Present",
    meta: "Supervisor: Arpit Narechania · Funded by the University of Toronto",
    description:
      "Working with the DataVISards research group on natural-language interfaces for generating, styling, and evaluating data visualizations.",
    highlights: [
      "Engineered multi-provider model selection and a second-stage NL4DV-Stylist workflow supporting text instructions and up to five example charts.",
      "Designed adversarial multilingual tests that exposed response-schema, dataset-field, error-handling, and Vega-Lite validation failures.",
      "Building an ongoing ReVISit study with localized consent and questionnaires, stable response coding, RTL support, and participant-specific language assignments.",
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
    description:
      "Represented students through residence council initiatives and helped strengthen community programming at UTM.",
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
