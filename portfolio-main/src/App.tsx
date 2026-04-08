import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import BackgroundAtmosphere from "./components/BackgroundAtmosphere";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import FooterSection from "./sections/FooterSection";
import HackathonsSection from "./sections/HackathonsSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 800);
    return () => window.clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-text">
      <ScrollToTopOnRouteChange />
      <BackgroundAtmosphere />

      <div className="relative z-10 pb-2">
        <Navbar />

        <main className="pb-8 pt-4 md:pt-6">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/experience" element={<ExperienceSection />} />
            <Route path="/hackathons" element={<HackathonsSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <FooterSection />
      </div>
    </div>
  );
}
