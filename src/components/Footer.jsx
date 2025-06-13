import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <h3 className="font-semibold text-lg">Nishan Pokharel</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Software Engineer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/pokharel-nishan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/nishan-pokharel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#hero"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Nishan Pokharel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
