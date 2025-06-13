import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Innovate Tech",
    location: "Baluwatar, Kathmandu",
    period: "Nov 2024 - Present",
    description: [
      "Developed and optimized full-stack features for the MySecondTeacher platform using React, Node.js, and microservices architecture",
      "Managed 7+ repositories and integrated GraphQL, gRPC, and REST APIs",
      "Upgraded 3-4 projects from React 16/17 to React 19, improving performance and accessibility",
      "Implemented nested bucket management system for exam/test questions",
      "Developed bulk import/export functionality for processing Excel sheets with 1000+ questions",
    ],
  },
  {
    title: "Node.js Intern",
    company: "Innovate Tech",
    location: "Baluwatar, Kathmandu",
    period: "Aug 2024 - Nov 2024",
    description: [
      "Developed HRM - Asset Management system with file uploads and secure resource sharing",
      "Implemented nested folder creation and access control using MongoDB",
      "Created Wiki Service with PostgreSQL database schemas and content management features",
      "Utilized AWS S3 with pre-signed URLs for efficient file management",
    ],
  },
  {
    title: "Backend Intern",
    company: "Rivia Infosys",
    location: "Bagbazzar, Kathmandu",
    period: "Feb 2024 - Aug 2024",
    description: [
      "Developed scalable backend solutions for the Edxplor platform",
      "Designed and implemented PostgreSQL database schemas using TypeORM",
      "Integrated Swagger for API documentation and Docker for deployment",
      "Contributed to agile workflows using Trello for project management",
    ],
  },
];

export const WorkExperienceSection = () => {
  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{experience.company}</span>
                    <span className="text-xs">•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {experience.description.map((item, index) => (
                  <li key={index} className="pl-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
