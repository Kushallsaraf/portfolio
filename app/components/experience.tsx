const experiences = [
  {
    role: "Community Director",
    company: "University of Toronto Mississauga Residence Council (UTMRC)",
    date: "January 2025 – May 2025",
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
              </div>
              <p className="experience-date">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
