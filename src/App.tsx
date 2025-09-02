import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Architecture from "./pages/Architecture";
import Projects from "./pages/Projects";
import Commercial from "./pages/Commercial";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/commercial" element={<Commercial />} />
      </Routes>
    </>
  );
}