import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { WorkCategoryGrid } from "./components/WorkCategoryGrid";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { UIUXPage } from "./pages/UIUXPage";
import { ImmersivePage } from "./pages/ImmersivePage";
import { GraphicDesignPage } from "./pages/GraphicDesignPage";
import { CreativeCodingPage } from "./pages/CreativeCodingPage";
import { DataPage } from "./pages/DataPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (page: string, section?: string) => {
    setCurrentPage(page);
    
    // If navigating to home with a specific section
    if (page === "home" && section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render category pages with navigation
  if (currentPage === "uiux") {
    return (
      <div className="min-h-screen relative">
        <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
        <UIUXPage onBack={handleBackToHome} />
      </div>
    );
  }

  if (currentPage === "immersive") {
    return (
      <div className="min-h-screen relative">
        <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
        <ImmersivePage onBack={handleBackToHome} />
      </div>
    );
  }

  if (currentPage === "graphic") {
    return (
      <div className="min-h-screen relative">
        <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
        <GraphicDesignPage onBack={handleBackToHome} />
      </div>
    );
  }

  if (currentPage === "coding") {
    return (
      <div className="min-h-screen relative">
        <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
        <CreativeCodingPage onBack={handleBackToHome} />
      </div>
    );
  }

  if (currentPage === "data") {
    return (
      <div className="min-h-screen relative">
        <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
        <DataPage onBack={handleBackToHome} />
      </div>
    );
  }

  if (currentPage === "coming-soon") {
    return (
      <div className="min-h-screen relative">
        <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
        <ComingSoonPage onBack={handleBackToHome} />
      </div>
    );
  }

  // Render home page
  return (
    <div className="min-h-screen relative">
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="work">
        <WorkCategoryGrid onNavigate={handleNavigate} />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}