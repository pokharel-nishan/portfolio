import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Innovate Tech",
    location: "Baluwatar, Kathmandu",
    period: "Nov 2024 - Present",
    type: "On-site",
    description: [
      "Developed and optimized full-stack features for the MySecondTeacher platform using React, Node.js, and microservices architecture",
      "Managed 7+ repositories and integrated GraphQL, gRPC, and REST APIs for seamless functionality",
      "Upgraded 3-4 projects from React 16/17 to React 19, improving performance and accessibility",
      "Implemented nested bucket management system for exam/test questions",
      "Developed bulk import/export functionality for Excel sheets processing 1000+ questions",
    ],
    technologies: [
      "React",
      "Node.js",
      "GraphQL",
      "gRPC",
      "REST APIs",
      "Excel Integration",
    ],
  },
  {
    title: "Node.js Intern",
    company: "Innovate Tech",
    location: "Baluwatar, Kathmandu",
    period: "Aug 2024 - Nov 2024",
    type: "Hybrid",
    description: [
      "Developed HRM - Asset Management system with file uploads and secure resource sharing",
      "Implemented nested folder creation and access control using MongoDB",
      "Created Wiki Service with PostgreSQL database schemas and content management features",
      "Utilized AWS S3 with pre-signed URLs for efficient file management",
    ],
    technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS S3", "TSOA"],
  },
  {
    title: "Backend Intern",
    company: "Rivia Infosys",
    location: "Bagbazzar, Kathmandu",
    period: "Feb 2024 - Aug 2024",
    type: "Remote",
    description: [
      "Developed scalable backend solutions for the Edxplor platform",
      "Designed and implemented PostgreSQL database schemas using TypeORM",
      "Integrated Swagger for API documentation and Docker for deployment",
      "Contributed to agile workflows using Trello for project management",
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Swagger"],
  },
];

export const WorkExperienceSection = () => {
  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
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
                  <div>
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

                <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                  {experience.description.map((item, index) => (
                    <li key={index} className="pl-2">
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
