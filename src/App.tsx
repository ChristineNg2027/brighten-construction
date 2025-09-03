import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Architecture from "./pages/Architecture";
import Projects from "./pages/Projects";
import Commercial from "./pages/Commercial";
import Page9PM from "./pages/gallary/9PM";
import PageArashi from "./pages/gallary/Arashi";
import PageBloom from "./pages/gallary/Bloom";
import PageFreshCuts from "./pages/gallary/FreshCuts";
import PageMinato from "./pages/gallary/Minato";
import PageShabu from "./pages/gallary/Shabu";

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
        <Route path="/gallary/9PM" element={<Page9PM />} />
        <Route path="/gallary/Arashi" element={<PageArashi />} />
        <Route path="/gallary/Bloom" element={<PageBloom />} />
        <Route path="/gallary/FreshCuts" element={<PageFreshCuts />} />
        <Route path="/gallary/Minato" element={<PageMinato />} />
        <Route path="/gallary/Shabu" element={<PageShabu />} />
      </Routes>
    </>
  );
}