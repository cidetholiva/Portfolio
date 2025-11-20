import { ArrowLeft, Sparkles, Clock, Rocket } from "lucide-react";

interface ComingSoonPageProps {
  onBack: () => void;
}

export function ComingSoonPage({ onBack }: ComingSoonPageProps) {
  const upcomingProjects = [
    {
      title: "AI-Powered Design Tools",
      description: "Exploring machine learning applications in creative workflows",
      status: "In Development",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "Spatial Computing Research",
      description: "Next-generation interfaces for Apple Vision Pro",
      status: "Research Phase",
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      title: "Sustainable Design Systems",
      description: "Eco-conscious approaches to digital product design",
      status: "Concept",
      icon: <Clock className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen pt-32 px-8 pb-24 relative">
      {/* Background blurred gradients */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl animate-pulse" />
      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-fuchsia-200/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="glass-strong rounded-full px-6 py-3 flex items-center gap-2 mb-12 hover:scale-105 transition-all duration-300 glow-pink"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Work
        </button>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass-strong rounded-full px-6 py-3 mb-8 glow-pink">
            <Sparkles className="w-6 h-6 text-rose-500 animate-pulse" />
            <span className="text-rose-500">Exciting things in the works</span>
          </div>
          
          <h1 className="text-7xl mb-6 gradient-text">Coming Soon</h1>
          <p className="text-2xl opacity-80 max-w-2xl mx-auto">
            I'm constantly exploring new creative and technical frontiers. Here's a preview of what's next.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-8 glow-warm hover:scale-102 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="glass-strong rounded-2xl p-4 text-rose-500 shrink-0">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl">{project.title}</h3>
                    <span className="glass px-3 py-1 rounded-full text-sm text-rose-500">
                      {project.status}
                    </span>
                  </div>
                  <p className="opacity-80 text-lg">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-strong rounded-3xl p-12 text-center glow-warm bg-gradient-to-br from-pink-400/10 to-rose-400/10">
          <Sparkles className="w-16 h-16 text-rose-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl mb-4 gradient-text">Stay Tuned</h2>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            I'm always working on new projects at the intersection of design, technology, and creativity. 
            Check back soon for updates, or reach out if you'd like to collaborate.
          </p>
          <a
            href="#contact"
            onClick={onBack}
            className="inline-flex items-center gap-2 glass-strong rounded-full px-8 py-4 glow-pink hover:scale-105 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
}
