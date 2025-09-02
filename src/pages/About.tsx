import { useEffect, useState } from "react";
import "../styles/pages.css";

export default function About() {
  // You can replace these with your real numbers once you have them
  const LICENSE_NUMBER = "LIC-XXXXXX";
  const INSURANCE_NUMBER = "INS-XXXXXX";

  const [copied, setCopied] = useState<null | "license" | "insurance" | "both">(null);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (typeof window === 'undefined') return;
    if (!('IntersectionObserver' in window) || els.length === 0) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
    els.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${Math.min(i * 80, 400)}ms`);
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const copyToClipboard = async (what: "license" | "insurance" | "both") => {
    try {
      const text =
        what === "license"
          ? `License #: ${LICENSE_NUMBER}`
          : what === "insurance"
          ? `Insurance #: ${INSURANCE_NUMBER}`
          : `License #: ${LICENSE_NUMBER}\nInsurance #: ${INSURANCE_NUMBER}`;
      await navigator.clipboard.writeText(text);
      setCopied(what);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      // non-blocking; clipboard not supported
    }
  };

  return (
    <div
      className="page-container about-page"
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}
    >
      {/* HERO */}
      <section className="about-hero reveal fade" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "clamp(16px, 4vw, 36px)", alignItems: "center" }}>
        <div className="reveal up">
          <h1 className="page-title" style={{ marginBottom: 8 }}>
            <span className="highlight">About</span> Brighten Construction LLC
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, opacity: 0.95 }}>
            <strong>Building with care, designing with vision.</strong> Since 2005, we’ve served
            Northwest Washington as a trusted partner for new builds, tenant improvements, and
            high‑quality renovations—commercial and residential alike.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <a className="btn primary" href="/commercial">Explore Commercial Services</a>
            <a className="btn" href="/commercial#contact">Contact Us</a>
          </div>
        </div>
        <div className="hero-media reveal up" style={{ aspectRatio: "4 / 3", borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 28px rgba(0,0,0,.12)", background: "#f5f5f7" }}>
          {/* Replace src with your team/site/finished‑project photo. This is optional. */}
          <img
            src="/public/Brighten-01.png"
            alt="Brighten Construction team on site"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </section>

      {/* COMPANY STORY + STATS */}
      <section style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: "clamp(16px, 4vw, 36px)", marginTop: 64 }}>
        <div className="about-text reveal fade">
          <p>
            We deliver <strong>design–build</strong> from the first sketch to the final walkthrough.
            Architecture, interiors, permitting, and construction handled by <em>one team</em>.
          </p>
          <p>
            We build with professionalism, integrity, and clear communication—so schedules stay tight
            and decisions stay simple.
          </p>
        </div>
        <div style={{ display: "grid", gap: 12 }} className="reveal fade">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <StatCard value="Licensed" label="WA State & Insured" />
            <StatCard value="Design‑Build" label="One Team, Start→Finish" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <StatCard value="Commercial" label="TI • Restaurants • Salons" />
            <StatCard value="Residential" label="New Builds & Remodels" />
          </div>
        </div>
      </section>

      {/* CAPABILITIES (compact, collapsible) */}
      <section className="reveal up" aria-label="Capabilities" style={{ marginTop: 64 }}>
        <details className="dropdown-content dropdown-animated" style={{ borderRadius: 10, padding: 16, background: "#fafafa" }}>
          <summary className="dropdown-toggle" style={{ cursor: "pointer", fontWeight: 600 }}>
            Our Capabilities
          </summary>
          <ul className="two-col-list" style={{ marginTop: 12, lineHeight: 1.9 }}>
            <li>Architectural drafting & interior design</li>
            <li>Permit coordination & inspections</li>
            <li>Commercial TI (restaurants, salons, clinics, offices)</li>
            <li>New builds & premium residential remodels</li>
            <li>Turnkey delivery with one accountable team</li>
          </ul>
        </details>
      </section>

      {/* HOW WE WORK (brief, scannable) */}
      <section aria-label="How we work" style={{ marginTop: 64 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 }}>
          <ValueCard title="Single Team" blurb="One point of contact from design through build." />
          <ValueCard title="Permits & Schedules" blurb="We handle the paperwork and drive the timeline." />
          <ValueCard title="Quality & Care" blurb="We build like it’s our own—clean, careful, on‑time." />
        </div>
      </section>

      {/* LICENSE + INSURANCE (accessible) */}
      <section style={{ marginTop: 28 }}>
        <details className="dropdown-content dropdown-animated reveal up" style={{ borderRadius: 10, padding: 16, background: "#fafafa", boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
          <summary className="dropdown-toggle" style={{ cursor: "pointer", fontWeight: 600, marginBottom: 12 }}>
            License & Insurance
          </summary>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignItems: "start" }}>
            <LabeledRow label="License #" value={LICENSE_NUMBER} onCopy={() => copyToClipboard("license")} copied={copied === "license"} />
            <LabeledRow label="Insurance #" value={INSURANCE_NUMBER} onCopy={() => copyToClipboard("insurance")} copied={copied === "insurance"} />
          </div>
          <div style={{ marginTop: 10 }}>
            <button className="btn" onClick={() => copyToClipboard("both")}>Copy Both</button>
            {copied && <span style={{ marginLeft: 10, fontSize: ".95rem", opacity: .8 }}>Copied!</span>}
          </div>
        </details>
      </section>

      {/* OPTIONAL GALLERY STRIP (replace images or remove) */}
      <section aria-label="Recent projects" style={{ marginTop: 28 }}>
        <div className="reveal fade" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          <a href="/projects/nail"><GalleryImg src="/public/nail/1.jpg" alt="Nail Salon" /></a>
          <a href="/projects/ramen"><GalleryImg src="/public/ramen/2.jpg" alt="Ramen Restaurant" /></a>
          <a href="/projects/minato"><GalleryImg src="/public/minato/3.jpg" alt="Minato Restaurant" /></a>
        </div>
      </section>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-card" style={{ border: "1px solid rgba(0,0,0,.08)", borderRadius: 12, padding: 16, background: "white" }}>
      <div style={{ fontSize: "1.35rem", fontWeight: 700 }}>{value}</div>
      <div style={{ fontSize: ".95rem", opacity: .8 }}>{label}</div>
    </div>
  );
}

function LabeledRow({ label, value, onCopy, copied }: { label: string; value: string; onCopy: () => void; copied: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "130px 1fr auto", alignItems: "center", gap: 8 }}>
      <div style={{ fontWeight: 600 }}>{label}</div>
      <code style={{ padding: "6px 10px", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: 8 }}>{value}</code>
      <button className="btn" onClick={onCopy}>{copied ? "Copied" : "Copy"}</button>
    </div>
  );
}

function GalleryImg({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ aspectRatio: "4 / 3", overflow: "hidden", borderRadius: 10, background: "#f1f1f4" }}>
      <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

function ValueCard({ title, blurb }: { title: string; blurb: string }) {
  return (
    <div className="value-card reveal fade" style={{ border: "1px solid rgba(0,0,0,.08)", borderRadius: 12, padding: 16, background: "white" }}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ opacity: .85, marginTop: 6 }}>{blurb}</div>
    </div>
  );
}