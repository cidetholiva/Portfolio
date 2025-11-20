import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface NavigationProps {
  onNavigate?: (page: string, section?: string) => void;
  currentPage?: string;
}

export function Navigation({ onNavigate, currentPage = "home" }: NavigationProps) {
  const [activeLink, setActiveLink] = useState("Home");
  
  // Update active link based on scroll position (only on home page)
  useEffect(() => {
    if (currentPage !== "home") return;
    
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const handleLinkClick = (name: string, href: string) => {
    setActiveLink(name);
    
    if (onNavigate) {
      // Navigate to home page and then to section
      const section = href.replace("#", "");
      onNavigate("home", section);
    }
  };

  const handleDownloadResume = () => {
    // Create a placeholder resume download
    // In production, this would link to an actual resume PDF
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume file path
    link.download = 'Cideth_Oliva_Resume.pdf';
    
    // For demo purposes, show an alert
    alert('Resume download would start here. Please upload your actual resume file to enable downloads.');
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
      <div className="max-w-7xl mx-auto glass-strong rounded-3xl px-8 py-4 flex items-center justify-between shadow-lg">
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("Home", "#home");
          }}
          className="text-xl tracking-tight gradient-text cursor-pointer"
        >
          Cideth Oliva
        </a>
        
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.name, link.href);
              }}
              className="relative group cursor-pointer transition-all duration-300"
            >
              <span className="text-foreground/80 hover:text-foreground transition-colors">
                {link.name}
              </span>
              {activeLink === link.name && currentPage === "home" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 rounded-full" />
              )}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400/0 via-rose-400/50 to-pink-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={handleDownloadResume}
            className="glass-strong rounded-full px-6 py-2.5 flex items-center gap-2 glow-pink hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      </div>
    </nav>
  );
}