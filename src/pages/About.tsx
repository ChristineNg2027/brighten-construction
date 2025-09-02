import { useState } from "react";
import "../styles/pages.css";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page-container">
      <h2 className="page-title">
        <span className="highlight">About</span> Brighten Construction LLC
      </h2>
      <hr className="section-divider" />
      <div className="about-text">
        <p><strong>Building with care, designing with vision.</strong></p>
        <p>
          Established in 2005 and headquartered in Northwest Washington, Brighten Construction LLC is a trusted name in both commercial and residential renovation.
        </p>
        <p>
          Our company is committed to delivering high-quality, customized new build designs and remodeling solutions. From the initial concept to the final build, we offer comprehensive services including interior design, architectural drafting, permit acquisition, and construction.
        </p>
        <p>
          Every project is approached with professionalism, integrity, and a focus on client satisfaction.
        </p>
      </div>
      <button onClick={() => setOpen(!open)} className="dropdown-toggle">
        License + Insurance <span className="arrow-icon">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="dropdown-content dropdown-animated">
          <p>License #: xxxxxx</p>
          <p>Insurance #: xxxxxx</p>
        </div>
      )}
    </div>
  );
}