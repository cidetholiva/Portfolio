import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 text-center">
          <p className="flex items-center justify-center gap-2 text-foreground/70">
            Designed & Built with{" "}
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> by Cideth
            Oliva
          </p>
          <p className="text-sm text-foreground/50 mt-2">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
