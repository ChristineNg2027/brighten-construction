import "../styles/pages.css";
import { useEffect } from "react";

export default function Architecture() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/microlinkjs@latest/dist/microlink.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="page-container">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center py-20 bg-white">
        <h1 className="text-5xl font-light tracking-tight bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
          Architecture Services
        </h1>
        <p className="mt-6 max-w-2xl text-center text-gray-500 leading-relaxed">
          Modern, sustainable design solutions tailored to your vision — simple, elegant, and timeless.
        </p>
      </section>

      {/* FEATURED STUDIO */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="space-y-6">
          <a
            href="https://www.number7studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="media-frame mx-auto">
              <div className="ratio-21x9">
                <img
                  src="/architecture/1.jpg"
                  alt="Number 7 Studio Preview"
                  className="ratio-content"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </a>
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-medium text-gray-800">Number 7 Studio</h2>
            <p className="text-gray-500 max-w-prose mx-auto">
              Award‑winning architecture and interior design. Explore a portfolio spanning commercial and residential spaces.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a
                href="https://www.number7studio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Visit Portfolio
              </a>
              <a
                href="/contact"
                className="rounded-full bg-gray-900 px-5 py-2 text-sm text-white hover:opacity-90"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="py-16 text-center">
        <p className="text-gray-500">
          Ready to collaborate?{" "}
          <a href="/contact" className="text-gray-800 underline hover:no-underline">
            Contact us
          </a>
        </p>
      </footer>
    </div>
  );
}