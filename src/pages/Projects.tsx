import "../styles/pages.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

export default function Projects() {
  // Centralized project data (add more as needed)
  const projects = useMemo(
    () => [
      { name: "9PM Hair Salon", folder: "9PM", count: 3, slug: "9pm-hair-salon", cover: 1 },
      { name: "Bloom Nail Spa", folder: "nail", count: 4, slug: "bloom-nail-spa", cover: 1 },
      { name: "Fresh Cuts Barber Shopll", folder: "barber", count: 6, slug: "fresh-cuts-barber", cover: 1 },
      { name: "Minato Japanese Restaurant", folder: "minato", count: 6, slug: "minato-japanese", cover: 1 },
      { name: "Shabu Shabu Kyoto", folder: "shabu", count: 6, slug: "shabu-shabu-kyoto", cover: 1 },
      { name: "Southcenter Arashi ramen", folder: "ramen", count: 7, slug: "southcenter-arashi-ramen", cover: 1 },
    ],
    []
  );

  const navigate = useNavigate();
  const [openProject, setOpenProject] = useState<string | null>(null);

  // Lightweight scroll-reveal using IntersectionObserver
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

  return (
    <div className="page-container projects-page">
      <header className="projects-hero reveal up" style={{"--reveal-delay": "40ms"} as any}>
        <h2 className="page-title">Projects</h2>
        <p className="muted">
          A quick, visual overview of recent build-outs. Click a card to view the
          full project page, or use <em>Quick View</em> to skim photos inline.
        </p>
      </header>

      {/* Grid of project cards */}
      <section className="projects-grid">
        {projects.map((p, idx) => {
          const isOpen = openProject === p.name;
          return (
            <article
              key={p.name}
              className="project-card reveal up"
              style={{"--reveal-delay": `${80 + idx * 40}ms`} as any}
              onClick={() => navigate(`/projects/${p.slug}`)}
              role="button"
              aria-label={`Open ${p.name} project page`}
            >
              <div className="project-media">
                <img
                  src={`/${p.folder}/${p.cover}.jpg`}
                  alt={`${p.name} cover`}
                  className="project-cover"
                  loading="lazy"
                />
              </div>
              <div className="project-meta">
                <h3 className="project-title">{p.name}</h3>
                <p className="project-subtle">{p.count} photo{p.count > 1 ? "s" : ""}</p>
                <div className="project-actions">
                  <button
                    className="btn-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenProject(isOpen ? null : p.name);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`${p.slug}-gallery`}
                  >
                    {isOpen ? "Hide Quick View" : "Quick View"}
                  </button>
                  <span className="dot" aria-hidden>•</span>
                  <button
                    className="btn-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/projects/${p.slug}`);
                    }}
                  >
                    View project →
                  </button>
                </div>
              </div>

              {isOpen && (
                <div id={`${p.slug}-gallery`} className="project-gallery">
                  {Array.from({ length: p.count }, (_, i) => (
                    <img
                      key={i}
                      src={`/${p.folder}/${i + 1}.jpg`}
                      alt={`${p.name} photo ${i + 1}`}
                      className="project-img"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}