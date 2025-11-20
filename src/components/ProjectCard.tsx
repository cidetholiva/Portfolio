import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className="group glass-strong rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 glow-pink">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-400/20 mix-blend-overlay z-10" />
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-foreground/90">{title}</h3>
          {link && (
            <a
              href={link}
              className="glass rounded-full p-2 hover:scale-110 transition-transform"
            >
              <ArrowUpRight className="w-4 h-4 text-rose-500" />
            </a>
          )}
        </div>
        
        <p className="text-foreground/70">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 glass rounded-full text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
