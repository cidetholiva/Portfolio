import { Gamepad2, Palette, Boxes, Code2, Lightbulb } from "lucide-react";

export function AboutMe() {
  const values = ["Accessibility", "Curiosity", "Impact", "Creativity"];
  
  const skills = [
    { icon: Gamepad2, label: "AR/VR" },
    { icon: Palette, label: "Animation" },
    { icon: Boxes, label: "Games" },
    { icon: Code2, label: "Frontend" },
    { icon: Lightbulb, label: "UX Research" },
  ];

  return (
    <section id="about" className="py-24 px-8 relative">
      {/* Background gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-rose-300/20 via-pink-300/20 to-peach-300/20 blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-strong rounded-[3rem] p-12 glow-warm">
          <h2 className="text-5xl mb-8 gradient-text text-center">About Me</h2>
          
          <p className="text-xl text-foreground/80 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            I'm passionate about accessibility, creativity, and building meaningful technology. 
            Curiosity drives everything I do—whether it's designing intuitive interfaces, 
            building interactive worlds, or experimenting with emerging tools.
          </p>
          
          {/* Values */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {values.map((value) => (
              <span
                key={value}
                className="glass rounded-full px-6 py-2.5 glow-pink hover:scale-105 transition-transform duration-300 cursor-default"
              >
                {value}
              </span>
            ))}
          </div>
          
          {/* Skills Icons */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {skills.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <div className="glass rounded-2xl p-4 glow-peach group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-rose-500" />
                </div>
                <span className="text-sm text-foreground/70">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
