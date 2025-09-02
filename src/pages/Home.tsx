import "../styles/pages.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <img
          src="/Brighten-01.png"
          alt="Brighten Construction Logo"
          className="home-logo home-logo-large"
        />
        <nav className="home-nav">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/commercial">Commercial</Link></li>
            <li><Link to="/license">License Bond and Insurance</Link></li>
            <li><Link to="/architecture">Architecture Service</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="home-main">
        <h2 className="page-title">Welcome to Brighten Construction</h2>
        <p>Building trusted, licensed, and insured projects with integrity and care.</p>
      </main>
    </div>
  );
}