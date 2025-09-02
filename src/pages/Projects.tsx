import "../styles/pages.css";
import { useState } from "react";

export default function Projects() {
  const projects = {
    "9PM Hair Salon": { folder: "9PM", count: 3 },
    "Bloom Nail Spa": { folder: "nail", count: 4 },
    "Fresh Cuts Barber Shopll": { folder: "barber", count: 6 },
    "Minato Japanese Restaurant": { folder: "minato", count: 6 },
    "Shabu Shabu Kyoto": { folder: "shabu", count: 6 },
    "Southcenter Arashi ramen": { folder: "ramen", count: 7 },
  };

  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <div className="page-container">
      <h2 className="page-title">Restaurant Projects</h2>
      <p>
        We bring concepts to life with specialized expertise in design and buildouts.
      </p>

      {Object.entries(projects).map(([name, { folder, count }]) => {
        const isOpen = openProject === name;
        return (
          <div key={name} className="project-section">
            <button
              className={`dropdown-toggle-clean${isOpen ? " open" : ""}`}
              onClick={() =>
                setOpenProject(isOpen ? null : name)
              }
            >
              <span className="arrow">{isOpen ? "▼" : "▶"}</span> {name}
            </button>
            {isOpen && (
              <div className="project-gallery">
                {Array.from({ length: count }, (_, i) => (
                  <img
                    key={i}
                    src={`/${folder}/${i + 1}.jpg`}
                    alt={`${name} project ${i + 1}`}
                    className="project-img"
                    style={{ width: "400px", height: "auto", margin: "0.5rem" }}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}