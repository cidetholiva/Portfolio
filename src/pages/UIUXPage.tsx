import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { CaseStudyLayout } from "../components/CaseStudyLayout";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface UIUXPageProps {
  onBack: () => void;
}

export function UIUXPage({ onBack }: UIUXPageProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = {
    convers8: {
      title: "Convers8",
      description: "A conversational platform focused on meaningful dialogue and connection, designed with accessibility-first principles.",
      role: "Lead UX Designer & Researcher",
      tools: ["Figma", "FigJam", "UserTesting", "Miro", "Notion"],
      duration: "4 months (Sept 2024 - Dec 2024)",
      problem: "Users struggle to have meaningful online conversations due to poorly designed interfaces that prioritize quantity over quality. Existing platforms lack accessibility features and fail to foster genuine community building.",
      solution: "Designed an inclusive conversational platform with intuitive navigation, real-time messaging, and community-building tools. Implemented WCAG 2.1 AA accessibility standards and created modular design systems that scale across devices.",
      process: [
        "User Research: Conducted 50+ user interviews and surveys to understand pain points in existing messaging platforms",
        "Competitive Analysis: Analyzed 10+ messaging apps to identify gaps in accessibility and user experience",
        "Information Architecture: Created user flows and site maps for key user journeys",
        "Low-Fidelity Wireframes: Sketched and iterated on 20+ screen designs based on user feedback",
        "High-Fidelity Mockups: Designed pixel-perfect interfaces with comprehensive design system",
        "Usability Testing: Conducted 3 rounds of testing with 15 users per round, iterating based on findings",
        "Accessibility Audit: Ensured WCAG 2.1 AA compliance with screen reader testing and keyboard navigation",
      ],
      outcome: "Increased user engagement by 65% and reduced task completion time by 40%. Accessibility score improved to 98/100 on Lighthouse. Platform launched with 1,000+ beta users and 4.8/5 rating on accessibility features.",
      reflection: "This project taught me the importance of designing for everyone, not just the average user. By prioritizing accessibility from day one, we created a product that's better for all users. The research phase was crucial in understanding the diverse needs of our audience.",
      tags: ["UI/UX", "Accessibility", "User Research", "Mobile Design"],
      images: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      ],
    },
    trustfund: {
      title: "TrustFund",
      description: "Financial planning platform designed for accessibility and transparency, helping users take control of their finances.",
      role: "UX Designer & User Researcher",
      tools: ["Figma", "Sketch", "InVision", "Hotjar", "Google Analytics"],
      duration: "5 months (Jan 2024 - May 2024)",
      problem: "Financial planning tools are often complex and intimidating, especially for users with limited financial literacy. Many platforms fail to provide transparent, easy-to-understand interfaces for budget tracking and investment planning.",
      solution: "Created comprehensive user flows for budget tracking, investment planning, and financial education with clear visualizations and plain-language explanations. Implemented progressive disclosure to avoid overwhelming users with information.",
      process: [
        "User Research: Interviewed 30+ users about their financial planning challenges and goals",
        "Persona Development: Created 5 detailed user personas representing different financial literacy levels",
        "Journey Mapping: Mapped out complete user journeys from onboarding through complex financial planning",
        "Wireframing: Designed 40+ wireframes for key features including budgeting, investing, and reporting",
        "Visual Design: Developed calming, trustworthy visual language with clear data visualizations",
        "Prototype Testing: Conducted A/B testing on critical flows with 100+ participants",
        "Accessibility Implementation: Ensured WCAG 2.1 AA compliance with special focus on color contrast for charts",
      ],
      outcome: "Users completed budget setup 3x faster than competing platforms. 85% of users reported feeling more confident about their finances. Accessibility compliance achieved 100% on all critical paths.",
      reflection: "Financial products require extra attention to trust-building and clarity. Every design decision needed to balance functionality with simplicity. The user testing revealed that what seems obvious to designers isn't always clear to users, especially when dealing with money.",
      tags: ["Fintech", "Web App", "UX Research", "Data Visualization"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      ],
    },
    iconsultancy: {
      title: "iConsultancy",
      description: "Enterprise consulting platform with intuitive workflows and dashboards for project management and client communications.",
      role: "Senior Product Designer",
      tools: ["Figma", "Adobe XD", "Jira", "Confluence", "Maze"],
      duration: "6 months (Aug 2023 - Jan 2024)",
      problem: "Consultants were spending too much time navigating complex systems instead of focusing on client work. The existing platform had poor information architecture and lacked efficient workflows for common tasks.",
      solution: "Designed complex information architecture for project management, client communications, and analytics reporting. Created streamlined UI patterns and keyboard shortcuts for power users while maintaining accessibility for new users.",
      process: [
        "Stakeholder Interviews: Met with 20+ consultants and managers to understand workflow pain points",
        "Task Analysis: Shadowed users performing common tasks to identify inefficiencies",
        "Information Architecture: Restructured navigation and content hierarchy based on task frequency",
        "Design System Creation: Built comprehensive component library for consistent enterprise UX",
        "Workflow Optimization: Designed quick actions, bulk operations, and customizable dashboards",
        "Prototype Development: Created interactive prototypes for user testing and stakeholder buy-in",
        "Implementation Support: Worked closely with developers to ensure design fidelity",
      ],
      outcome: "Reduced task completion time by 40% and decreased new user onboarding time by 50%. User satisfaction scores increased from 6.2 to 8.9 out of 10. The design system enabled faster feature development across the organization.",
      reflection: "Enterprise software design requires balancing power-user efficiency with beginner-friendly interfaces. The design system was crucial for maintaining consistency across a complex platform. Close collaboration with developers ensured our ambitious designs were technically feasible.",
      tags: ["Enterprise", "Dashboard", "Systems Design", "IA"],
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
      ],
    },
  };

  if (selectedProject && projects[selectedProject as keyof typeof projects]) {
    return (
      <CaseStudyLayout
        project={projects[selectedProject as keyof typeof projects]}
        onBack={() => setSelectedProject(null)}
        gradientFrom="from-pink-400/20"
        gradientTo="to-rose-500/20"
      />
    );
  }

  return (
    <div className="min-h-screen pt-32 px-8 pb-24 relative">
      {/* Background blurred gradients */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="glass-strong rounded-full px-6 py-3 flex items-center gap-2 mb-12 hover:scale-105 transition-all duration-300 glow-pink"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Work
        </button>

        <h1 className="text-7xl mb-6 gradient-text">UI/UX Design & Research</h1>
        <p className="text-2xl opacity-80 mb-16 max-w-3xl">
          User-centered design projects focused on accessibility, research, and intuitive experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projects).map(([key, project]) => (
            <button
              key={key}
              onClick={() => setSelectedProject(key)}
              className="group glass-strong rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 text-left glow-pink hover:glow-warm"
            >
              {/* Preview Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-400/20 to-rose-400/20">
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl mb-4 group-hover:text-pink-400 transition-colors duration-300">{project.title}</h3>
                <p className="opacity-80 mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="glass px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-rose-500 group-hover:text-rose-400 group-hover:translate-x-2 transition-all duration-300">
                  View Case Study →
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}