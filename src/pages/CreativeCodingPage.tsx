import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { CaseStudyLayout } from "../components/CaseStudyLayout";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface CreativeCodingPageProps {
  onBack: () => void;
}

export function CreativeCodingPage({ onBack }: CreativeCodingPageProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = {
    generative: {
      title: "Generative Art System",
      description: "Procedural art generation using algorithms, noise functions, and mathematical patterns to create unique visual compositions.",
      role: "Creative Technologist & Artist",
      tools: ["Processing", "p5.js", "JavaScript", "WebGL", "Python"],
      duration: "4 months (2024)",
      problem: "Traditional art creation is time-intensive and difficult to iterate at scale. Artists need tools that can generate infinite variations while maintaining aesthetic coherence and artistic intent.",
      solution: "Built a generative art system using Perlin noise, cellular automata, and fractal algorithms. Created parameter spaces that allow for controlled randomness - each output is unique but adheres to defined aesthetic rules.",
      process: [
        "Algorithm Research: Studied generative art techniques from Perlin noise to L-systems",
        "Prototype Development: Built 10+ different generative algorithms in Processing",
        "Parameter Design: Created intuitive parameter spaces for controlling output",
        "Aesthetic Refinement: Iterated on color palettes and composition rules",
        "Performance Optimization: Optimized for real-time generation and high-resolution export",
        "Web Implementation: Ported system to p5.js for browser-based interaction",
        "Exhibition: Displayed generated works in local gallery show",
      ],
      outcome: "Generated 1,000+ unique artworks, 15 of which were displayed in gallery exhibition. System used by 50+ artists to create their own generative pieces. Open-sourced core algorithms with 200+ GitHub stars.",
      reflection: "Generative art taught me to think in systems and parameters rather than individual outputs. The challenge is designing rules that create variety without chaos. Code becomes a creative medium when you embrace controlled randomness.",
      tags: ["Generative Art", "Processing", "Algorithms", "Creative Code"],
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800",
      ],
    },
    interactive: {
      title: "Interactive Web Experiences",
      description: "Creative web experiments using Three.js, WebGL shaders, and creative JavaScript to build engaging interactive experiences.",
      role: "Creative Developer",
      tools: ["Three.js", "WebGL", "GLSL", "React", "TypeScript"],
      duration: "6 months (2023-2024)",
      problem: "Most websites feel static and disconnected from user input. Interactive experiences often sacrifice performance for visual complexity, resulting in laggy, frustrating interactions.",
      solution: "Created performant interactive web experiences using WebGL and optimized JavaScript. Built modular systems for particle effects, mouse-reactive animations, and shader-based visuals that maintain 60fps on most devices.",
      process: [
        "Concept Sketching: Designed interaction concepts and visual effects",
        "Three.js Setup: Built 3D scenes with camera controls and lighting systems",
        "Shader Programming: Wrote custom GLSL shaders for unique visual effects",
        "Interaction Design: Implemented mouse tracking, scroll-based animations, and gestures",
        "Performance Profiling: Used Chrome DevTools to identify and fix bottlenecks",
        "Responsive Design: Adapted experiences for mobile with simplified visuals",
        "User Testing: Gathered feedback on usability and performance across devices",
      ],
      outcome: "Created 8 interactive web experiences with average engagement time of 3.5 minutes. All experiences maintain 60fps on desktop and 30fps on mobile. Featured on Awwwards and CSS Design Awards.",
      reflection: "Creative coding for the web requires balancing ambition with technical constraints. The best interactive experiences feel magical but run smoothly. Performance optimization is a creative challenge, not just a technical one.",
      tags: ["WebGL", "Three.js", "Shaders", "Interactive", "JavaScript"],
      images: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800",
      ],
    },
    datavis: {
      title: "Creative Data Visualization",
      description: "Transforming complex datasets into beautiful, interactive visualizations that reveal patterns and tell stories.",
      role: "Data Visualization Designer",
      tools: ["D3.js", "Observable", "Python", "Pandas", "React"],
      duration: "5 months (2024)",
      problem: "Data is often presented in boring charts that fail to engage audiences or reveal deeper patterns. Complex datasets need visualization approaches that are both informative and aesthetically compelling.",
      solution: "Developed custom visualization techniques that go beyond standard charts. Created interactive data stories that guide users through insights while allowing for exploration and personal discovery.",
      process: [
        "Data Analysis: Explored datasets to identify interesting patterns and stories",
        "Sketch Ideation: Hand-sketched 30+ visualization concepts before coding",
        "D3.js Development: Built custom visualizations with smooth animations and interactions",
        "Narrative Design: Structured data stories with clear progression and insights",
        "Color & Typography: Applied design principles for accessible, beautiful data viz",
        "Interactivity: Added hover states, filters, and drill-down capabilities",
        "User Testing: Tested comprehension and engagement with target audiences",
      ],
      outcome: "Created 12 interactive data visualizations with average view time of 5 minutes. Visualizations shared 2,000+ times on social media. One piece featured in data visualization showcase.",
      reflection: "Good data visualization is as much about storytelling as it is about accuracy. The challenge is respecting the data while making it approachable. Creative coding skills enable visualizations that would be impossible in standard tools.",
      tags: ["Data Viz", "D3.js", "Storytelling", "Python", "Interactive"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800",
      ],
    },
  };

  if (selectedProject && projects[selectedProject as keyof typeof projects]) {
    return (
      <CaseStudyLayout
        project={projects[selectedProject as keyof typeof projects]}
        onBack={() => setSelectedProject(null)}
        gradientFrom="from-fuchsia-400/20"
        gradientTo="to-pink-400/20"
      />
    );
  }

  return (
    <div className="min-h-screen pt-32 px-8 pb-24 relative">
      {/* Background blurred gradients */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="glass-strong rounded-full px-6 py-3 flex items-center gap-2 mb-12 hover:scale-105 transition-all duration-300 glow-pink"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Work
        </button>

        <h1 className="text-7xl mb-6 gradient-text">Creative Coding</h1>
        <p className="text-2xl opacity-80 mb-16 max-w-3xl">
          Generative art, interactive experiences, and creative code experiments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projects).map(([key, project]) => (
            <button
              key={key}
              onClick={() => setSelectedProject(key)}
              className="group glass-strong rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 text-left glow-pink hover:glow-warm"
            >
              {/* Preview Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-fuchsia-400/20 to-pink-400/20">
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl mb-4 group-hover:text-fuchsia-300 transition-colors duration-300">{project.title}</h3>
                <p className="opacity-80 mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="glass px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-rose-500 group-hover:text-fuchsia-300 group-hover:translate-x-2 transition-all duration-300">
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