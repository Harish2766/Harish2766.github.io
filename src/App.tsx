import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorGlow from "./components/ui/CursorGlow";

export default function App() {
  return (
    <div className="min-h-screen bg-midnight-900 text-text-primary">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        {/* Section divider */}
        <div className="section-divider max-w-4xl mx-auto" />
        <About />
        <div className="section-divider max-w-4xl mx-auto" />
        <Education />
        <div className="section-divider max-w-4xl mx-auto" />
        <Skills />
        <div className="section-divider max-w-4xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-4xl mx-auto" />
        <CodingProfiles />
        <div className="section-divider max-w-4xl mx-auto" />
        <Contact />
      </main>
    </div>
  );
}
