import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectData {
  title: string;
  description: string;
  role: string;
  tools: string[];
  duration: string;
  problem: string;
  solution: string;
  process: string[];
  outcome: string;
  reflection: string;
  images?: string[];
  tags?: string[];
}

interface CaseStudyLayoutProps {
  project: ProjectData;
  onBack: () => void;
  gradientFrom?: string;
  gradientTo?: string;
}

export function CaseStudyLayout({ 
  project, 
  onBack,
  gradientFrom = "from-pink-400/20",
  gradientTo = "to-rose-400/20"
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Background blurred gradients */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
      <div className="fixed top-1/3 right-0 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl" />
      <div className="fixed bottom-0 left-1/3 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />

      {/* Hero Banner */}
      <section className={`relative pt-40 pb-24 px-8 bg-gradient-to-br ${gradientFrom} ${gradientTo} overflow-hidden`}>
        {/* Lighter overlay for text contrast */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <button
            onClick={onBack}
            className="glass-strong rounded-full px-6 py-3 flex items-center gap-2 mb-8 hover:scale-105 transition-all duration-300 glow-pink"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Category
          </button>
          
          <h1 className="text-7xl mb-6 gradient-text">{project.title}</h1>
          <p className="text-2xl opacity-80 max-w-3xl">{project.description}</p>
          
          {project.tags && (
            <div className="flex flex-wrap gap-3 mt-8">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="glass px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Featured Hero Image Card */}
        {project.images && project.images[0] && (
          <div className="max-w-5xl mx-auto mt-12 relative z-10">
            <div className="glass-strong rounded-3xl p-4 glow-warm overflow-hidden">
              <ImageWithFallback
                src={project.images[0]}
                alt={project.title}
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        )}
      </section>

      {/* Project Summary - 3 Column Layout */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-strong rounded-3xl p-8 glow-pink">
              <h3 className="text-xl mb-4 text-rose-500">My Role</h3>
              <p className="opacity-80">{project.role}</p>
            </div>
            
            <div className="glass-strong rounded-3xl p-8 glow-peach">
              <h3 className="text-xl mb-4 text-rose-500">Tools & Tech</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span key={index} className="glass px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-strong rounded-3xl p-8 glow-pink">
              <h3 className="text-xl mb-4 text-rose-500">Duration</h3>
              <p className="opacity-80">{project.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 glow-warm">
            <h2 className="text-4xl mb-6 gradient-text">The Problem</h2>
            <p className="text-xl opacity-80 leading-relaxed">{project.problem}</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 glow-warm">
            <h2 className="text-4xl mb-6 gradient-text">The Solution</h2>
            <p className="text-xl opacity-80 leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl mb-12 text-center gradient-text">Design Process</h2>
          <div className="space-y-8">
            {project.process.map((step, index) => (
              <div key={index} className="glass-strong rounded-3xl p-8 glow-pink">
                <div className="flex items-start gap-6">
                  <div className="glass-strong rounded-full w-12 h-12 flex items-center justify-center text-rose-500 shrink-0 text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg opacity-80 leading-relaxed">{step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images if provided */}
      {project.images && project.images.length > 0 && (
        <section className="py-16 px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="glass-strong rounded-3xl p-4 glow-pink overflow-hidden">
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcome */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 glow-warm bg-gradient-to-br from-pink-400/10 to-rose-400/10">
            <h2 className="text-4xl mb-6 gradient-text">The Outcome</h2>
            <p className="text-xl opacity-80 leading-relaxed">{project.outcome}</p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 px-8 pb-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 glow-warm">
            <h2 className="text-4xl mb-6 gradient-text">Reflection</h2>
            <p className="text-xl opacity-80 leading-relaxed">{project.reflection}</p>
          </div>
          
          {/* Back button at bottom */}
          <div className="flex justify-center mt-12">
            <button
              onClick={onBack}
              className="glass-strong rounded-full px-8 py-4 flex items-center gap-3 glow-pink hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Category
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}