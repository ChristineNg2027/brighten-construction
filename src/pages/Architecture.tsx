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
      {/* Hero Section */}
      <section className="text-center py-10 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800">Architecture Services</h1>
        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
          Explore modern, sustainable design solutions tailored to your vision — commercial, residential, and everything in between.
        </p>
      </section>

      {/* Featured Studio */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
          <div className="flex justify-center">
            <a
              href="https://www.number7studio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/architecture/1.jpg"
                alt="Number 7 Studio Preview"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  display: "block"
                }}
              />
            </a>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Number 7 Studio</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Award-winning architecture and interior design. Browse their commercial and residential work for inspiration.
            </p>
            <a
              href="https://www.number7studio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              Visit Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <hr className="my-12 border-gray-200" />
      <p className="text-center text-gray-500 mb-10">
        Want to collaborate with us? Reach out through our{" "}
        <a href="/contact" className="text-blue-600 hover:underline">contact form</a>.
      </p>
    </div>
  );
}