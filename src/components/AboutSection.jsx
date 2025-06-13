import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Software Engineer & Solution Architect
            </h3>

            <p className="text-muted-foreground">
              With experience in building enterprise-level applications, I
              specialize in creating scalable, high-performance solutions using
              modern web technologies. Currently working as a Software Engineer
              at Innovate Tech, where I develop and optimize full-stack features
              for educational platforms.
            </p>

            <p className="text-muted-foreground">
              I&apos;m passionate about microservices architecture, cloud
              solutions, and API-driven development. My expertise spans across
              REST APIs, GraphQL, and gRPC, with a strong focus on delivering
              robust and maintainable solutions that drive business value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Resume Nishan Pokharel.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Expert in React.js, Node.js, Express.js, and Nest.js,
                    building scalable web applications with modern frameworks
                    and tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Cloud & Architecture
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in microservices architecture, AWS services, and
                    database design for scalable applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Development</h4>
                  <p className="text-muted-foreground">
                    Proficient in designing and implementing RESTful APIs,
                    GraphQL, and gRPC services with comprehensive documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
