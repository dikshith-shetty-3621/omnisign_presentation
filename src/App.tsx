import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollProgress from "./components/ScrollProgress";
import SectionDivider from "./components/SectionDivider";

// Lazy load heavy sections for performance
const ParticlesBackground = lazy(() => import("./components/ParticlesBackground"));
const ProblemSection = lazy(() => import("./components/ProblemSection"));
const SolutionSection = lazy(() => import("./components/SolutionSection"));
const HowItWorksSection = lazy(() => import("./components/HowItWorksSection"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const TechStackSection = lazy(() => import("./components/TechStackSection"));
const InnovationSection = lazy(() => import("./components/InnovationSection"));
const ImpactSection = lazy(() => import("./components/ImpactSection"));
const FutureScopeSection = lazy(() => import("./components/FutureScopeSection"));
const TeamSection = lazy(() => import("./components/TeamSection"));
const FinalSection = lazy(() => import("./components/FinalSection"));

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scan line effect */}
      <div className="scanline" />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Particles */}
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        {/* Slide 1: Hero */}
        <HeroSection />

        <SectionDivider />

        {/* Slide 2: Problem */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <ProblemSection />
        </Suspense>

        <SectionDivider />

        {/* Slide 3: Solution */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <SolutionSection />
        </Suspense>

        <SectionDivider />

        {/* Slide 4: How It Works */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <HowItWorksSection />
        </Suspense>

        <SectionDivider />

        {/* Slide 5: Features */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <FeaturesSection />
        </Suspense>

        <SectionDivider />

        {/* Slide 6: Tech Stack */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <TechStackSection />
        </Suspense>

        <SectionDivider />

        {/* Slide 7: Innovation */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <InnovationSection />
        </Suspense>

        <SectionDivider />

        {/* Slide 8: Impact */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <ImpactSection />
        </Suspense>

        <SectionDivider />

        {/* Slide 9: Future Scope */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <FutureScopeSection />
        </Suspense>

        <SectionDivider />

        {/* Team */}
        <Suspense fallback={<div className="py-24" />}>
          <TeamSection />
        </Suspense>

        <SectionDivider />

        {/* Slide 10: Final */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <FinalSection />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
