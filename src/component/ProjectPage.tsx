// src/components/ProjectPage.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../styles/pages.css";

export interface ProjectPageSection {
  image: string;
  heading?: string;
  body: string | React.ReactNode;
}

export interface ProjectPageProps {
  title: string;
  subtitle?: string;
  websiteUrl?: string;
  location?: string;
  scope?: string;
  services?: string;
  status?: string;
  heroImage: string;
  /** If provided, renders paired image+description sections in order */
  sections?: ProjectPageSection[];
  /** Legacy fallback content: used only when sections are not provided */
  images?: string[];
  copy?: string | React.ReactNode;
}

export function ProjectPage(props: ProjectPageProps) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const {
    title, subtitle, websiteUrl, location, scope, services, status,
    heroImage, sections, images = [], copy,
  } = props;

  return (
    <div className="page-container project-detail">
      <nav className="reveal up" style={{ "--reveal-delay": "30ms" } as any}>
        <button className="btn-link" onClick={() => navigate(-1)}>← Back to projects</button>
      </nav>

      <header className="project-hero reveal up" style={{ "--reveal-delay": "80ms" } as any}>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="muted">{subtitle}</p>}
        <div className="project-hero-media float">
          <img src={heroImage} alt={`${title} cover`} className="hero-img" loading="eager" />
        </div>
        {websiteUrl && (
          <div className="hero-actions">
            <a className="btn-link" href={websiteUrl} target="_blank" rel="noreferrer">
              Visit website ↗
            </a>
          </div>
        )}
      </header>

      {/* Details toggle */}
      <section className="details-toggle reveal up" style={{ "--reveal-delay": "100ms" } as any}>
        <button
          className={`btn-link btn-toggle ${expanded ? "open" : ""}`}
          aria-expanded={expanded}
          aria-controls="project-details"
          onClick={() => {
            setExpanded(v => !v);
            setTimeout(() => {
              const el = document.getElementById("project-details");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 80);
          }}
        >
          <span className="chev" aria-hidden>▾</span>
          <span>{expanded ? "Hide details" : "View details"}</span>
        </button>
      </section>

      {/* Paired image + description sections (preferred) */}
      {Array.isArray(sections) && sections.length > 0 && (
        <section id="project-details" className={`project-sections${expanded ? " open" : ""}`}>
          {sections.map((s, idx) => (
            <div
              key={idx}
              className={`pair reveal up ${idx % 2 === 1 ? "reverse" : ""}`}
              style={{ "--reveal-delay": `${120 + idx * 80}ms` } as any}
            >
              <div className="pair-media">
                <img
                  src={s.image}
                  alt={`${title} section ${idx + 1}`}
                  className="pair-img"
                  loading="lazy"
                />
              </div>
              <div className="pair-copy">
                {s.heading && <h3 className="pair-heading">{s.heading}</h3>}
                {typeof s.body === "string" ? <p>{s.body}</p> : s.body}
                {websiteUrl && idx === 0 && (
                  <div className="pair-actions">
                    <a className="btn-link" href={websiteUrl} target="_blank" rel="noreferrer">
                      Visit website ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Legacy fallback content when no sections are provided */}
      {(!sections || sections.length === 0) && (
        <>
          {copy && (
            <section className="project-copy reveal up" style={{ "--reveal-delay": "160ms" } as any}>
              {typeof copy === "string" ? <p>{copy}</p> : copy}
            </section>
          )}

          {images.length > 0 && (
            <section className="project-gallery-full reveal up" style={{ "--reveal-delay": "200ms" } as any}>
              <h2 className="section-title">Gallery</h2>
              <div className="gallery-grid">
                {images.map((src, i) => (
                  <img key={i} src={src} alt={`${title} photo ${i + 1}`} className="project-img" loading="lazy" />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {(location || scope || services || status) && (
        <section className="project-facts reveal up" style={{ "--reveal-delay": "120ms" } as any}>
          <div className="facts-grid">
            {location && (<div className="fact"><div className="fact-label">Location</div><div className="fact-value">{location}</div></div>)}
            {scope && (<div className="fact"><div className="fact-label">Scope</div><div className="fact-value">{scope}</div></div>)}
            {services && (<div className="fact"><div className="fact-label">Services</div><div className="fact-value">{services}</div></div>)}
            {status && (<div className="fact"><div className="fact-label">Status</div><div className="fact-value">{status}</div></div>)}
          </div>
        </section>
      )}

      <section className="project-cta reveal up" style={{ "--reveal-delay": "240ms" } as any}>
        <div className="cta-card">
          <h3>Planning a commercial project?</h3>
          <p className="muted">We help restaurant and retail owners move from concept to opening.</p>
          <div className="cta-actions">
            <button className="btn-link" onClick={() => navigate("/commercial")}>Contact us →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProjectPage;