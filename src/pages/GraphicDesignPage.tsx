import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { CaseStudyLayout } from "../components/CaseStudyLayout";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface GraphicDesignPageProps {
  onBack: () => void;
}

export function GraphicDesignPage({ onBack }: GraphicDesignPageProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = {
    branding: {
      title: "Personal Brand Identity",
      description: "Complete brand identity system with custom typography, color palette, and visual language for personal portfolio.",
      role: "Brand Designer & Art Director",
      tools: ["Adobe Illustrator", "After Effects", "Figma", "Photoshop"],
      duration: "2 months (2024)",
      problem: "Needed a cohesive visual identity that reflects both technical expertise and creative sensibility. The brand needed to work across digital and print while maintaining the warm, futuristic aesthetic.",
      solution: "Developed comprehensive brand guidelines including logo system, color palette, typography, and motion design principles. Created modular components that adapt to different contexts while maintaining brand consistency.",
      process: [
        "Brand Strategy: Defined core values, target audience, and competitive positioning",
        "Mood boarding: Collected 100+ references exploring warm futurism and gradient aesthetics",
        "Logo Design: Sketched 50+ concepts, refined top 5, finalized signature logo and wordmark",
        "Color System: Developed warm gradient palette with pink, peach, and rose tones",
        "Typography: Selected and paired fonts that balance modern and editorial aesthetics",
        "Design System: Created reusable components for consistent application",
        "Motion Guidelines: Developed animation principles for smooth, dreamy transitions",
      ],
      outcome: "Created cohesive brand identity used across portfolio website, social media, and print materials. Received positive feedback from 15+ design peers. Brand guidelines enable consistent visual communication across all touchpoints.",
      reflection: "Personal branding requires honest self-reflection and the courage to be distinctive. The warm gradient aesthetic felt authentic to my design philosophy of making technology feel human and approachable.",
      tags: ["Branding", "Visual Identity", "Motion Design", "Art Direction"],
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
      ],
    },
    editorial: {
      title: "Editorial Design Series",
      description: "Collection of editorial layouts for digital and print publications, focusing on typography and visual hierarchy.",
      role: "Editorial Designer",
      tools: ["InDesign", "Photoshop", "Illustrator"],
      duration: "Ongoing (2023-Present)",
      problem: "Digital publications often lack the thoughtful typography and layout of traditional print design. Readers need engaging visual experiences that enhance rather than distract from content.",
      solution: "Applied editorial design principles to digital formats with careful attention to typography, white space, and visual flow. Created templates that maintain editorial quality while being flexible for various content types.",
      process: [
        "Content Analysis: Studied article structure and identified key information hierarchy",
        "Grid Systems: Developed modular grid systems for consistent yet flexible layouts",
        "Typographic Exploration: Tested font pairings and sizes for optimal readability",
        "Visual Elements: Created custom illustrations and data visualizations",
        "Digital Adaptation: Optimized layouts for various screen sizes and reading modes",
        "User Testing: Gathered feedback on readability and visual appeal",
        "Template Development: Built reusable templates for efficient production",
      ],
      outcome: "Designed 20+ editorial layouts with average reading time 40% longer than site average. Templates adopted for company-wide use, ensuring consistent editorial quality.",
      reflection: "Editorial design teaches patience and attention to detail. Every typographic decision impacts readability. The challenge is creating visual interest while never overshadowing the content itself.",
      tags: ["Editorial", "Typography", "Print Design", "Layout"],
      images: [
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
        "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?w=800",
      ],
    },
    motion: {
      title: "Motion Graphics Portfolio",
      description: "Animated logos, transitions, and explainer videos using After Effects and motion design principles.",
      role: "Motion Designer",
      tools: ["After Effects", "Cinema 4D", "Premiere Pro", "Lottie"],
      duration: "Various projects (2023-2024)",
      problem: "Static designs can't convey the energy and dynamism of modern digital products. Brands need motion systems that feel purposeful rather than gratuitous.",
      solution: "Created motion design systems with consistent easing, timing, and animation principles. Developed reusable animation templates that maintain brand personality while being efficient to produce.",
      process: [
        "Motion Principles: Established timing, easing, and choreography guidelines",
        "Storyboarding: Planned animation sequences and key frames",
        "Asset Preparation: Organized layers and design files for animation",
        "Animation: Created smooth, purposeful motion using principle-based approach",
        "Sound Design: Added audio elements to enhance motion feedback",
        "Optimization: Exported in multiple formats for web, social, and presentations",
        "Documentation: Created motion guidelines for consistent future work",
      ],
      outcome: "Produced 15+ animated pieces used in product launches and marketing. Motion system adopted across brand touchpoints. Animations increased engagement by 50% on social media.",
      reflection: "Motion design is about timing and subtlety. Too much motion is distracting, too little is boring. The best animations feel inevitable - like that's how things should naturally move.",
      tags: ["Motion Design", "Animation", "Video", "After Effects"],
      images: [
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800",
      ],
    },
  };

  if (selectedProject && projects[selectedProject as keyof typeof projects]) {
    return (
      <CaseStudyLayout
        project={projects[selectedProject as keyof typeof projects]}
        onBack={() => setSelectedProject(null)}
        gradientFrom="from-pink-300/20"
        gradientTo="to-rose-300/20"
      />
    );
  }

  return (
    <div className="min-h-screen pt-32 px-8 pb-24 relative">
      {/* Background blurred gradients */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="glass-strong rounded-full px-6 py-3 flex items-center gap-2 mb-12 hover:scale-105 transition-all duration-300 glow-pink"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Work
        </button>

        <h1 className="text-7xl mb-6 gradient-text">Graphic Design & Animation</h1>
        <p className="text-2xl opacity-80 mb-16 max-w-3xl">
          Visual identity, editorial design, and motion graphics that tell compelling stories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projects).map(([key, project]) => (
            <button
              key={key}
              onClick={() => setSelectedProject(key)}
              className="group glass-strong rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 text-left glow-pink hover:glow-warm"
            >
              {/* Preview Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-300/20 to-rose-300/20">
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl mb-4 group-hover:text-pink-300 transition-colors duration-300">{project.title}</h3>
                <p className="opacity-80 mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="glass px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-rose-500 group-hover:text-pink-300 group-hover:translate-x-2 transition-all duration-300">
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