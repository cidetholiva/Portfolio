import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { CaseStudyLayout } from "../components/CaseStudyLayout";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ImmersivePageProps {
  onBack: () => void;
}

export function ImmersivePage({ onBack }: ImmersivePageProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = {
    alice: {
      title: "Alice in DisasterLand",
      description: "Award-winning VR experience created at Technica hackathon, reimagining Alice's journey through an immersive disaster narrative.",
      role: "VR Designer & Developer",
      tools: ["Unity", "C#", "Blender", "Oculus SDK", "FMOD"],
      duration: "36 hours (Technica Hackathon 2024)",
      problem: "Traditional storytelling about disaster preparedness fails to create emotional connection and doesn't engage younger audiences. Educational content about emergency response is often dry and forgettable.",
      solution: "Created an immersive VR experience that places users in Alice's fantastical world while teaching real disaster preparedness concepts. Combined engaging narrative with practical learning through interactive environmental storytelling and spatial audio.",
      process: [
        "Concept Development: Brainstormed creative ways to merge classic literature with disaster education",
        "Storyboarding: Mapped out key narrative beats and disaster scenarios across VR environments",
        "3D Environment Design: Modeled and textured 5 distinct environments inspired by Alice in Wonderland",
        "VR Interaction Design: Implemented hand tracking, object manipulation, and spatial navigation",
        "Audio Design: Created immersive soundscapes with directional audio cues for storytelling",
        "User Testing: Rapid prototyping with hackathon attendees for immediate feedback",
        "Polish & Optimization: Performance optimization for smooth VR experience without motion sickness",
      ],
      outcome: "Won 'Best Use of VR' award at Technica 2024. Engaged 100+ users during demo sessions with average session time of 15 minutes. 95% of users reported learning new disaster preparedness concepts in a memorable way.",
      reflection: "Building a complete VR experience in 36 hours taught me the importance of scoping and rapid prototyping. The combination of familiar narrative (Alice) with serious content (disaster prep) proved highly effective. VR's immersive nature creates emotional connections that traditional media can't match.",
      tags: ["VR", "Unity", "Game Design", "Technica", "Award Winner"],
      images: [
        "https://images.unsplash.com/photo-1758523670550-223a01cd7764?w=800",
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800",
      ],
    },
    zideth: {
      title: "Zideth's Saga VR Game",
      description: "Immersive VR adventure game featuring interactive storytelling, dynamic gameplay mechanics, and intuitive hand-tracking interactions.",
      role: "Game Designer & VR Developer",
      tools: ["Unity", "C#", "Blender", "Oculus Quest SDK", "Substance Painter"],
      duration: "8 months (Personal Project, 2023-2024)",
      problem: "Many VR games rely on controller-based interactions that break immersion. Players want more natural, intuitive ways to interact with virtual worlds that leverage VR's unique capabilities.",
      solution: "Developed custom locomotion system, inventory management, and combat mechanics using hand tracking and gesture-based interactions. Created a narrative-driven adventure that responds to player choices and play styles.",
      process: [
        "Game Design Document: Outlined core mechanics, narrative structure, and player progression systems",
        "Locomotion Prototyping: Tested 5+ movement systems to find the most comfortable VR navigation",
        "Hand Tracking Implementation: Developed gesture recognition system for spell casting and item interaction",
        "Combat System: Designed physics-based combat with weapon handling and defensive mechanics",
        "Inventory & UI: Created spatial UI that exists in 3D space rather than traditional flat menus",
        "Narrative Integration: Built branching dialogue system and consequence-based story progression",
        "Playtesting: Conducted 15+ playtest sessions, focusing on comfort and engagement metrics",
      ],
      outcome: "Successfully created 4 hours of gameplay content with branching narratives. Hand tracking implementation achieved 90% gesture recognition accuracy. Players reported high immersion scores and minimal motion sickness.",
      reflection: "VR game design requires constant attention to player comfort and immersion. Traditional game design rules don't always apply - what works on a flat screen can cause discomfort in VR. The hand tracking added complexity but significantly enhanced the feeling of 'being there'.",
      tags: ["VR", "Unity", "C#", "3D Design", "Hand Tracking"],
      images: [
        "https://images.unsplash.com/photo-1641226020521-1ad4675b26c9?w=800",
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
      ],
    },
    musicviz: {
      title: "Unity Music Visualizer",
      description: "Real-time audio-reactive visualizer built in Unity with particle systems and shader programming, creating dynamic visuals synchronized to music.",
      role: "Creative Technologist & Shader Artist",
      tools: ["Unity", "ShaderLab", "C#", "Ableton Live", "Houdini"],
      duration: "3 months (2024)",
      problem: "Music visualization tools often rely on preset effects that don't truly respond to the nuances of music. Artists and performers need customizable, real-time visual systems that can adapt to different musical genres and moods.",
      solution: "Built a modular audio analysis system that breaks down music into frequency bands and drives procedural visual effects. Created multiple visualization modes with customizable parameters and real-time performance optimization.",
      process: [
        "Audio Analysis: Implemented FFT (Fast Fourier Transform) for real-time frequency analysis",
        "Particle Systems: Designed reactive particle emitters driven by bass, mids, and treble frequencies",
        "Shader Development: Created custom shaders for color grading, distortion, and reactive effects",
        "Procedural Generation: Built algorithms for generating geometric patterns synced to rhythm",
        "Performance Optimization: GPU instancing and LOD systems for 60fps at 4K resolution",
        "User Controls: Developed intuitive interface for live parameter control and preset management",
        "Integration Testing: Tested with various music genres from EDM to classical to ensure versatility",
      ],
      outcome: "Achieved real-time visualization at 60fps in 4K resolution. Created 10+ unique visualization modes used by 3 local DJs for live performances. Open-sourced particle system component, downloaded 500+ times by Unity developers.",
      reflection: "This project bridged my interests in music, mathematics, and visual art. Learning shader programming opened up new creative possibilities. The challenge was balancing creative expression with performance optimization - beautiful effects mean nothing if they don't run smoothly.",
      tags: ["Unity", "Audio", "Procedural", "Visual FX", "Shaders"],
      images: [
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      ],
    },
  };

  if (selectedProject && projects[selectedProject as keyof typeof projects]) {
    return (
      <CaseStudyLayout
        project={projects[selectedProject as keyof typeof projects]}
        onBack={() => setSelectedProject(null)}
        gradientFrom="from-rose-400/20"
        gradientTo="to-fuchsia-400/20"
      />
    );
  }

  return (
    <div className="min-h-screen pt-32 px-8 pb-24 relative">
      {/* Background blurred gradients */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="glass-strong rounded-full px-6 py-3 flex items-center gap-2 mb-12 hover:scale-105 transition-all duration-300 glow-pink"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Work
        </button>

        <h1 className="text-7xl mb-6 gradient-text">Immersive Works</h1>
        <p className="text-2xl opacity-80 mb-16 max-w-3xl">
          AR/VR experiences and interactive games pushing the boundaries of immersive technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projects).map(([key, project]) => (
            <button
              key={key}
              onClick={() => setSelectedProject(key)}
              className="group glass-strong rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 text-left glow-peach hover:glow-warm"
            >
              {/* Preview Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-rose-400/20 to-fuchsia-400/20">
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl mb-4 group-hover:text-fuchsia-400 transition-colors duration-300">{project.title}</h3>
                <p className="opacity-80 mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="glass px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-rose-500 group-hover:text-fuchsia-400 group-hover:translate-x-2 transition-all duration-300">
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