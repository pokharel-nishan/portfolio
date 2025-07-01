import { useState } from "react";

export const HeroSection = () => {
  const [blast, setBlast] = useState(false);
  const [showRocket, setShowRocket] = useState(true);

  const handleRocketClick = () => {
    setShowRocket(false);
    setBlast(true);
    setTimeout(() => {
      setBlast(false);
      setShowRocket(true);
    }, 900); 
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nishan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Pokharel
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full-Stack Software Engineer specializing in Node.js, Express.js,
            Nest.js, and React.js. Building scalable, high-performance
            applications with modern technologies and cloud services.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex gap-4 justify-center">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center select-none">
        {showRocket && (
          <span
            className="text-4xl animate-float-rocket cursor-pointer transition-opacity duration-300"
            onClick={handleRocketClick}
            style={{ opacity: showRocket ? 1 : 0 }}
            title="Blast off!"
          >
            🚀
          </span>
        )}
        {blast && (
          <span className="rocket-blast" role="img" aria-label="blast">
            🔥
          </span>
        )}
        <span className="text-xs text-muted-foreground mt-2 opacity-80 animate-fade-in-delay-5">
          Click for fun, Scroll for the journey!
        </span>
      </div>
    </section>
  );
};
