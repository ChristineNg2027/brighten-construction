import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className="logo">
            <img src="/Brighten-01.png" alt="Brighten Construction Logo" className="logo-img" />
        </Link>
      <h1 className="logo">Brighten Construction, LLC</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/architecture">Architecture</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/commercial">Commercial</Link>
      </div>
    </nav>
  );
}