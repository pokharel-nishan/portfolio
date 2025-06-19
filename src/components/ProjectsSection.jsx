import {
  ArrowRight,
  ExternalLink,
  Github,
  Briefcase,
  Code,
} from "lucide-react";
import PropTypes from "prop-types";

const projects = {
  professional: [
    {
      id: 1,
      title: "MySecondTeacher",
      description:
        "Educational platform with advanced features including nested bucket management for exam questions and bulk data processing capabilities.",
      image: "/projects/project2.png",
      tags: ["React", "Node.js", "GraphQL", "gRPC", "Material UI"],
      demoUrl: "#",
      company: "Innovate Tech",
    },
    {
      id: 2,
      title: "Testpaper",
      description:
        "Google Drive-like system for resource management with nested folders, file sharing, and access control using AWS S3.",
      image: "/projects/project3.png",
      tags: ["Node.js", "MongoDB", "AWS S3", "Express.js", "React"],
      demoUrl: "#",
      company: "Innovate Tech",
    },
    {
      id: 3,
      title: "Edxplor",
      description:
        "Google Drive-like system for resource management with nested folders, file sharing, and access control using AWS S3.",
      image: "/projects/project3.png",
      tags: ["Node.js", "MongoDB", "AWS S3", "Express.js", "React"],
      demoUrl: "#",
      company: "Rivia Infosys",
    },
  ],
  personal: [
    {
      id: 4,
      title: "Open-ML",
      description:
        "A no-code machine learning platform enabling users to upload datasets, preprocess data, train models, and visualize results without coding expertise.",
      image: "/projects/project1.png",
      tags: [
        "React 19",
        "Node.js",
        "FastAPI",
        "PostgreSQL",
        "AWS S3",
        "Microservices",
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/pokharel-nishan/open-ml",
    },
    {
      id: 5,
      title: "E-commerce",
      description:
        "Modern, responsive portfolio website built with React and TailwindCSS, featuring dark mode, animations, and a clean design.",
      image: "/projects/project2.png",
      tags: ["React", "TailwindCSS", "Vite", "Radix UI"],
      demoUrl: "#",
      githubUrl: "https://github.com/pokharel-nishan/portfolio",
    },
    {
      id: 6,
      title: "Finance Tracker",
      description:
        "Educational platform with advanced features including nested bucket management for exam questions and bulk data processing capabilities.",
      image: "/projects/project2.png",
      tags: ["React", "Node.js", "GraphQL", "gRPC", "Material UI"],
      demoUrl: "#",
      githubUrl: "#",
      company: "Innovate Tech",
    },
  ],
};
const ProjectGrid = ({ projects, showCompany = false }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project) => (
      <div
        key={project.id}
        className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
      >
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            {showCompany && project.company && (
              <p className="text-sm text-primary mb-2 flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {project.company}
              </p>
            )}
          </div>

          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            {project.description}
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-start space-x-3 pt-2">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/5 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <ExternalLink size={18} />
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/5 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      demoUrl: PropTypes.string,
      githubUrl: PropTypes.string,
      company: PropTypes.string,
    })
  ).isRequired,
  showCompany: PropTypes.bool,
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my professional work and personal projects,
          demonstrating my expertise in full-stack development and cloud
          solutions.
        </p>

        {/* Professional Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" />
            Professional Work
          </h3>
          <ProjectGrid projects={projects.professional} showCompany={true} />
        </div>

        {/* Personal Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-primary" />
            Personal Projects
          </h3>
          <ProjectGrid projects={projects.personal} />
        </div>

        <div className="text-center">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/pokharel-nishan"
          >
            View More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
