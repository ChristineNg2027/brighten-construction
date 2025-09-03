import { useEffect, useRef } from "react";
import "../styles/pages.css";
import { Link } from "react-router-dom";

export default function Home() {
  const featureRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    // Stagger in the feature cards
    featureRefs.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => el.classList.add("enter"), i * 150);
    });
  }, []);

  return (
    <div className="home-page fancy-home">
      {/* Background layer */}
      <div className="bg-media" aria-hidden="true" />
      <div className="bg-gradient" aria-hidden="true" />

      <header className="home-header fancy-header">
        <Link to="/" className="brand">
          <img
            src="/Brighten-01.png"
            alt="Brighten Construction Logo"
            className="home-logo home-logo-large logo-float"
          />
        </Link>
        <nav className="home-nav">
          <ul>
            <li><Link className="navlink" to="/about">About</Link></li>
            <li><Link className="navlink" to="/commercial">Commercial</Link></li>
            <li><Link className="navlink" to="/license">License, Bond & Insurance</Link></li>
            <li><Link className="navlink" to="/architecture">Architecture Service</Link></li>
            <li><Link className="navlink" to="/projects">Projects</Link></li>
            <li><Link className="navlink" to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="home-main">
        {/* HERO */}
        <section className="hero">
          <h1 className="hero-title">
            Licensed. Insured. Built to Last.
          </h1>
          <p className="hero-sub">
            From design to delivery, we craft commercial spaces with integrity and care.
          </p>
          <div className="hero-ctas">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/commercial" className="btn btn-ghost">Contact Us</Link>
          </div>
          <div className="scroll-indicator" aria-hidden>
            <span />
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="highlights">
          {[
            { title: "Licensed & Insured", desc: "Peace of mind on every job.", to: "/license" },
            { title: "Architecture Service", desc: "Concept to permit-ready.", to: "/architecture" },
            { title: "Commercial Expertise", desc: "Restaurants, offices, and more.", to: "/commercial" },
          ].map((card, i) => (
            <Link
              to={card.to}
              key={card.title}
              className="feature-card"
              ref={(el) => { featureRefs.current[i] = el; }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className="arrow" aria-hidden>→</span>
            </Link>
          ))}
        </section>

        {/* TRUST STRIP */}
        <section className="trust-strip" aria-label="Highlights">
          <div className="marquee">
            <span>WA Licensed • Bonded • Insured • Restaurant Build‑Outs • Tenant Improvements • ADA Upgrades • </span>
            <span>WA Licensed • Bonded • Insured • Restaurant Build‑Outs • Tenant Improvements • ADA Upgrades • </span>
          </div>
        </section>
      </main>

      {/* Inline styles for fancy motion without extra deps */}
      <style>{`
        /* Layout polish */
        .fancy-home { position: relative; overflow: hidden; min-height: 100dvh; color: #0f172a; }
        .fancy-header { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; padding: 1rem 2rem; backdrop-filter: blur(8px); background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6) 60%, transparent); border-bottom: 1px solid rgba(15,23,42,0.06); }
        .brand { display:flex; align-items:center; gap:0; text-decoration:none; }
        .brand-text { font-weight: 700; letter-spacing: .2px; color:#0f172a; }

        /* Animated background image (parallax-ish) */
        .bg-media { position: absolute; inset: -10vh -10vw 50% -10vw; background-image: url('https://images.unsplash.com/photo-1504306663429-75ec59ab8bff?q=80&w=2000&auto=format&fit=crop'); background-size: cover; background-position: center; filter: saturate(1.05) contrast(1.05) brightness(.95); transform: translateZ(0); will-change: transform; animation: slow-pan 40s linear infinite alternate; }
        @keyframes slow-pan { from { transform: scale(1.05) translate3d(0,0,0); } to { transform: scale(1.12) translate3d(0,-20px,0); } }
        .bg-gradient { position:absolute; inset:0; background: radial-gradient(1200px 600px at 20% 0%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(900px 600px at 80% 10%, rgba(16,185,129,0.18), transparent 60%); pointer-events:none; }

        /* Logo float */
        .logo-float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-6px) } }

        /* Nav links */
        .home-nav ul { display:flex; gap:1.25rem; list-style:none; margin:0; padding:0; }
        .navlink { position:relative; text-decoration:none; color:#0f172a; font-weight:500; }
        .navlink:after { content:""; position:absolute; left:0; right:100%; bottom:-4px; height:2px; background:#0f172a; transition: right .3s ease; }
        .navlink:hover:after, .navlink:focus:after { right:0; }

        /* Hero */
        .hero { padding: 12vh 2rem 4rem; max-width: 1000px; margin: 0 auto; text-align: center; }
        .hero-title { font-size: clamp(2rem, 5vw, 3.75rem); line-height: 1.1; letter-spacing: -0.5px; margin: 0; animation: fadeUp .8s ease both; }
        .hero-sub { margin: 1rem auto 1.5rem; max-width: 60ch; font-size: clamp(1rem, 1.5vw, 1.125rem); color: #334155; animation: fadeUp .9s ease both; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(12px) } to { opacity:1; transform: translateY(0) } }

        .hero-ctas { display:flex; gap:.75rem; justify-content:center; }
        .btn { display:inline-block; padding:.8rem 1.1rem; border-radius: .65rem; text-decoration:none; border: 1px solid rgba(15,23,42,0.12); transition: transform .15s ease, box-shadow .2s ease, background .2s ease; }
        .btn:hover { transform: translateY(-1px); box-shadow: 0 10px 24px rgba(15,23,42,0.08); }
        .btn-primary { background:#0f172a; color:white; border-color:#0f172a; }
        .btn-ghost { background: rgba(255,255,255,0.7); color:#0f172a; }

        .scroll-indicator { display:flex; justify-content:center; margin-top:1.25rem; }
        .scroll-indicator span { width:2px; height:28px; background:#0f172a; opacity:.2; position:relative; overflow:hidden; border-radius:2px; }
        .scroll-indicator span:after { content:""; position:absolute; left:0; right:0; top:-100%; height:100%; background:#0f172a; animation: scrollDot 1.6s ease-in-out infinite; }
        @keyframes scrollDot { 0%{ top:-100% } 60%{ top:0 } 100%{ top:120% } }

        /* Highlights */
        .highlights { display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 1rem; max-width: 1100px; margin: 2rem auto; padding: 0 2rem; }
        @media (max-width: 900px) { .highlights { grid-template-columns:1fr; } }
        .feature-card { position:relative; padding: 1.25rem 1.1rem; background: rgba(255,255,255,0.78); border:1px solid rgba(15,23,42,0.08); border-radius: 1rem; text-decoration:none; color:#0f172a; transform: translateY(8px) scale(.98); opacity: 0; transition: transform .35s ease, opacity .35s ease, box-shadow .25s ease, border-color .25s ease; backdrop-filter: blur(6px); }
        .feature-card.enter { transform: translateY(0) scale(1); opacity:1; }
        .feature-card:hover { box-shadow: 0 18px 36px rgba(15,23,42,0.10); border-color: rgba(15,23,42,0.18); }
        .feature-card h3 { margin:0 0 .35rem; font-size:1.1rem; }
        .feature-card p { margin:0 1.6rem 0 0; color:#334155; }
        .feature-card .arrow { position:absolute; right:.9rem; top:.9rem; font-size:1.25rem; transition: transform .25s ease; }
        .feature-card:hover .arrow { transform: translateX(4px); }

        /* Trust strip */
        .trust-strip { margin: 2.5rem 0 4rem; }
        .marquee { display:flex; gap:2rem; white-space:nowrap; overflow:hidden; border-block: 1px dashed rgba(15,23,42,0.15); padding: .8rem 0; font-weight:600; color:#0f172a; }
        .marquee span { display:inline-block; padding-left: 100%; animation: marquee 18s linear infinite; }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-100%) } }
      `}</style>
    </div>
  );
}