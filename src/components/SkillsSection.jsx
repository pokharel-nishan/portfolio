import {
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
  Wrench,
  BrainCircuit,
  FileJson,
  Blocks,
} from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "HTML5/CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Nest.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    name: "APIs & Protocols",
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: "REST APIs", icon: <FileJson className="w-4 h-4" /> },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      { name: "gRPC", icon: <Blocks className="w-4 h-4" /> },
      { name: "WebSocket", icon: <BrainCircuit className="w-4 h-4" /> },
    ],
  },
  {
    name: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "Oracle SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "GitLab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/amazonaws.svg",
      },
    ],
  },
  {
    name: "Development Tools",
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Swagger",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
      },
      {
        name: "Strapi",
        icon: "https://www.svgrepo.com/show/306806/strapi.svg",
      },
      {
        name: "Trello",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
      },
      { name: "Wrike", icon: <Wrench className="w-4 h-4" /> },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills & <span className="text-primary">Technologies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    {typeof skill.icon === "string" ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-4 h-4"
                      />
                    ) : (
                      skill.icon
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
