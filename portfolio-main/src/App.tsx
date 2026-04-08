import { useEffect, useState } from "react";
import BackgroundAtmosphere from "./components/BackgroundAtmosphere";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import RevealSection from "./components/RevealSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import FooterSection from "./sections/FooterSection";
import HackathonsSection from "./sections/HackathonsSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

const revealDelays = [0.02, 0.04, 0.06, 0.08, 0.1, 0.12];

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
      <BackgroundAtmosphere />

      <div className="relative z-10 pb-2">
        <Navbar />

        <main className="space-y-20 pb-8 pt-4 md:space-y-24 md:pt-6">
          <HeroSection />

          <RevealSection id="about" direction="left" delay={revealDelays[0]}>
            <AboutSection />
          </RevealSection>

          <RevealSection id="skills" direction="right" delay={revealDelays[1]}>
            <SkillsSection />
          </RevealSection>

          <RevealSection id="projects" direction="left" delay={revealDelays[2]}>
            <ProjectsSection />
          </RevealSection>

          <RevealSection id="experience" direction="right" delay={revealDelays[3]}>
            <ExperienceSection />
          </RevealSection>

          <RevealSection id="hackathons" direction="left" delay={revealDelays[4]}>
            <HackathonsSection />
          </RevealSection>

          <RevealSection id="contact" direction="right" delay={revealDelays[5]}>
            <ContactSection />
          </RevealSection>
        </main>

        <FooterSection />
      </div>
    </div>
  );
}
