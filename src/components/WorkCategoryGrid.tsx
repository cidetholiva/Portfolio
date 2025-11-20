import { ArrowRight, Palette, Gamepad2, PenTool, Code2, Database, Clock } from "lucide-react";

interface WorkCategoryGridProps {
  onNavigate: (page: string) => void;
}

export function WorkCategoryGrid({ onNavigate }: WorkCategoryGridProps) {
  const categories = [
    {
      title: "UI/UX Design & Research",
      page: "uiux",
      icon: <PenTool className="w-12 h-12" />,
      gradient: "from-pink-400/30 via-rose-400/30 to-pink-500/30",
      glowColor: "rgba(255, 155, 181, 0.4)",
      hoverBg: "from-pink-400/50 via-rose-400/50 to-pink-500/50",
      hoverGlow: "rgba(255, 155, 181, 0.6)",
    },
    {
      title: "Immersive Works (AR/VR + Games)",
      page: "immersive",
      icon: <Gamepad2 className="w-12 h-12" />,
      gradient: "from-rose-400/30 via-pink-500/30 to-fuchsia-400/30",
      glowColor: "rgba(255, 181, 160, 0.4)",
      hoverBg: "from-rose-400/50 via-pink-500/50 to-fuchsia-400/50",
      hoverGlow: "rgba(255, 181, 160, 0.6)",
    },
    {
      title: "Graphic Design & Animation",
      page: "graphic",
      icon: <Palette className="w-12 h-12" />,
      gradient: "from-pink-300/30 via-rose-300/30 to-pink-400/30",
      glowColor: "rgba(255, 175, 201, 0.4)",
      hoverBg: "from-pink-300/50 via-rose-300/50 to-pink-400/50",
      hoverGlow: "rgba(255, 175, 201, 0.6)",
    },
    {
      title: "Creative Coding",
      page: "coding",
      icon: <Code2 className="w-12 h-12" />,
      gradient: "from-fuchsia-400/30 via-pink-400/30 to-rose-400/30",
      glowColor: "rgba(255, 143, 184, 0.4)",
      hoverBg: "from-fuchsia-400/50 via-pink-400/50 to-rose-400/50",
      hoverGlow: "rgba(255, 143, 184, 0.6)",
    },
    {
      title: "Data Analytics & Systems",
      page: "data",
      icon: <Database className="w-12 h-12" />,
      gradient: "from-rose-300/30 via-pink-300/30 to-fuchsia-300/30",
      glowColor: "rgba(255, 196, 163, 0.4)",
      hoverBg: "from-rose-300/50 via-pink-300/50 to-fuchsia-300/50",
      hoverGlow: "rgba(255, 196, 163, 0.6)",
    },
    {
      title: "Coming Soon",
      page: "coming-soon",
      icon: <Clock className="w-12 h-12" />,
      gradient: "from-pink-200/30 via-rose-200/30 to-pink-300/30",
      glowColor: "rgba(255, 155, 181, 0.3)",
      hoverBg: "from-pink-200/50 via-rose-200/50 to-pink-300/50",
      hoverGlow: "rgba(255, 155, 181, 0.5)",
    },
  ];

  return (
    <section id="work" className="py-32 px-8 relative">
      {/* Background blurred gradient blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 pt-8">
          <h2 className="text-6xl mb-4 gradient-text">My Work</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Explore my projects across design, development, and immersive experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => onNavigate(category.page)}
              className="group relative glass-strong rounded-3xl p-12 overflow-hidden hover:scale-105 transition-all duration-500 text-left"
              style={{
                boxShadow: `0 8px 32px ${category.glowColor}`,
              }}
            >
              {/* Gradient background - changes on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} group-hover:from-pink-500/60 group-hover:via-rose-500/60 group-hover:to-fuchsia-500/60 transition-all duration-500`}
              />
              
              {/* Enhanced gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Noise texture */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-rose-500 group-hover:text-rose-300 mb-6 group-hover:scale-110 transition-all duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-pink-50 transition-colors duration-300">{category.title}</h3>
                <div className="flex items-center gap-2 text-rose-500 group-hover:text-rose-300 group-hover:gap-4 transition-all duration-300">
                  <span>Explore Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Enhanced glow ring on hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 0 60px ${category.hoverGlow}, 0 0 40px ${category.hoverGlow}`,
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}