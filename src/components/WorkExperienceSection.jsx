import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Innovate Tech",
    location: "Baluwatar, Kathmandu",
    period: "Aug 2024 - Present",
    type: "On-site",
    description: [
      "Engineered full-stack features for the MySecondTeacher platform using React for the frontend, Node.js with Express and Koa for the backend, integrating GraphQL for efficient frontend-backend communication, and REST APIs to enable smooth operation across various modules.",
      "Architected and maintained scalable backend services in a monorepo managed by Nx, using Node.js, TypeScript, and Koa, integrating API Gateway and Saga Orchestration Pattern for service logic and gRPC for microservice communication to support modular, efficient operations.",
      "Implemented bulk import/export functionality to process over 1,000 exam questions from Excel sheets asynchronously, utilizing BullMQ for task queuing.",
      "Led the migration of four critical projects from React 16/17 to React 19, upgrading React Router DOM to v7 and Material UI from v4 to v7 to ensure cross-project compatibility, modernize dependencies, and prevent potential future issues.",
      "Developed the frontend for a nested bucket management system to organize exam and test questions using React, GraphQL, Material UI, and Bootstrap, enabling the creation, updating, deletion, movement, and duplication of hierarchical buckets for efficient content management.",
      "Collaborated with cross-functional teams via GitLab for version control and package management, contributing to custom package creation and publication while resolving frontend and backend issues to enhance code reusability and system stability.",
      "Developed an HRM Asset Management system (similar to Google Drive) using Node.js, Express.js, and MongoDB, implementing secure file uploads and nested folder creation with role-based access control via JWT, integrated with AWS S3 and pre-signed URLs for efficient storage and retrieval.",
      "Built the HRM Wiki Service backend with TypeScript, TSOA, and PostgreSQL, designing RESTful APIs and database schemas for content creation and versioning to support internal knowledge sharing.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Koa",
      "GraphQL",
      "gRPC",
      "REST APIs",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "microservices",
      "TSOA",
    ],
  },
  {
    title: "Backend Developer",
    company: "Rivia Infosys",
    location: "Bagbazzar, Kathmandu",
    period: "Feb 2024 - Aug 2024",
    type: "Remote",
    description: [
      "Developed backend services for the Edxplor and Hrxplor platforms using Node.js, Express.js, and Nest.js, focusing on scalable RESTful APIs and TypeScript for type-safe, maintainable codebases.",
      "Designed and optimized PostgreSQL database schemas using TypeORM, implementing indexing and query optimization to enhance data retrieval for platform features.",
      "Integrated Strapi for content management and Swagger for API documentation, streamlining development workflows and ensuring clear API specifications.",
      "Utilized Docker to containerize services and Wrike for agile project management, enabling consistent deployments and timely feature delivery in a fast-paced environment.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Swagger",
      "Nest",
      "Strapi",
    ],
  },
];

export const WorkExperienceSection = () => {
  return (
    <section
      id="work-experience"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work{" "}
          <span className="text-primary" style={{ fontWeight: "inherit" }}>
            Experience
          </span>
        </h2>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-3 bottom-3 w-0.5 bg-primary/20 hidden md:block" />

          {experiences.map((experience, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute left-8 top-3 w-3 h-3 rounded-full bg-primary hidden md:block group-hover:scale-150 transition-transform duration-300" />

              <div className="md:ml-16 bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      {experience.title}
                      <span className="text-sm font-normal text-foreground/60 px-2 py-1 rounded-full bg-primary/10">
                        {experience.type}
                      </span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.company}, {experience.location}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-foreground/80 mb-4 ml-4 text-left">
                  {experience.description.map((item, index) => (
                    <li key={index} className="list-disc list-outside">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
