import {
  Award,
  Briefcase,
  Code2,
  FileCode2,
  Laptop,
  Rocket,
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                Full-Stack Software Engineer
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                With a passion for crafting elegant solutions to complex
                challenges, I specialize in building scalable, high-performance
                applications using modern web technologies. My expertise spans
                the entire development stack, from responsive front-end
                interfaces to robust back-end systems and cloud infrastructure.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-primary" />
                My Contribution to Scalable Systems
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-foreground">
                      Full-Stack Experience:
                    </strong>{" "}
                    Architecting and developing comprehensive solutions using
                    modern tech stacks, with a focus on scalable microservices
                    and cloud-native applications.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCode2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-foreground">
                      Modern Architecture:
                    </strong>{" "}
                    Expertise in designing and implementing distributed systems
                    using GraphQL, gRPC, and REST APIs, backed by robust
                    database solutions and cloud infrastructure.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Laptop className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-foreground">Problem Solver:</strong>{" "}
                    Track record of transforming complex business requirements
                    into elegant technical solutions, from optimizing data
                    processing to implementing sophisticated access control
                    systems.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats & Highlights - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <h4 className="text-4xl font-bold text-primary mb-2">1.5+</h4>
                <p className="text-sm text-foreground/80">
                  Years of Coding Experience
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <h4 className="text-4xl font-bold text-primary mb-2">15+</h4>
                <p className="text-sm text-foreground/80">Projects Completed</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">BSC (HONS) Computing</h4>
                  <p className="text-sm text-foreground/80">
                    London Metropolitan University
                  </p>
                  <p className="text-xs text-foreground/60">2022 - 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold">A-Levels</h4>
                  <p className="text-sm text-foreground/80">
                    Cambridge University
                  </p>
                  <p className="text-xs text-foreground/60">2019 - 2021</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button flex-1 text-center">
                Get In Touch
              </a>
              <a
                href="/Resume Nishan Pokharel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex-1 text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
