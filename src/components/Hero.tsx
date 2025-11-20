import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-8 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-300/40 via-rose-300/30 to-orange-200/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-peach-300/30 via-pink-200/30 to-rose-300/20 blur-3xl" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Main Intro Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-7xl gradient-text animate-fade-in">
              Hi, I'm Cideth!
            </h1>
            <p className="text-2xl text-foreground/80 leading-relaxed">
              I design and build digital experiences that feel intuitive, accessible, and joyful.
            </p>
            <p className="text-lg text-foreground/60">
              UI/UX • Frontend • AR/VR • Games • Creative Tech.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="#work"
              className="glass-strong rounded-full px-8 py-4 flex items-center gap-2 glow-pink hover:scale-105 transition-all duration-300 group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="glass rounded-full px-8 py-4 flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Right Side: Reserved Space for 3D Character */}
        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
          {/* Glow backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-rose-400/20 to-orange-300/20 rounded-[3rem] blur-2xl" />
          
          {/* Reserved space container */}
          <div className="relative glass rounded-[3rem] p-12 w-full h-full flex items-center justify-center border-2 border-white/40">
            <div className="text-center space-y-4 opacity-40">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-pink-300/50 to-rose-300/50 blur-sm animate-pulse" />
              <p className="text-sm text-foreground/60">
                Reserved for 3D Character
                <br />
                or Interactive Demo
              </p>
            </div>
          </div>
          
          {/* Floating orbs */}
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400/30 to-rose-400/30 blur-xl animate-float" />
          <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-peach-400/30 to-orange-300/30 blur-xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}