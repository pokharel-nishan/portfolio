import { Database, Globe, Layout, Server, Terminal, Wrench } from "lucide-react";

const skillCategories = [
	{
		name: "Frontend",
		icon: <Layout className="w-5 h-5" />,
		skills: [
			"React.js",
			"TypeScript",
			"JavaScript",
			"Material UI",
			"Tailwind CSS",
			"HTML5/CSS3",
		],
	},
	{
		name: "Backend",
		icon: <Server className="w-5 h-5" />,
		skills: ["Node.js", "Express.js", "Nest.js", "FastAPI", "Python"],
	},
	{
		name: "APIs & Protocols",
		icon: <Globe className="w-5 h-5" />,
		skills: ["REST APIs", "GraphQL", "gRPC", "WebSocket"],
	},
	{
		name: "Databases",
		icon: <Database className="w-5 h-5" />,
		skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Oracle SQL"],
	},
	{
		name: "DevOps & Tools",
		icon: <Wrench className="w-5 h-5" />,
		skills: ["Git", "GitHub", "GitLab", "Docker", "AWS S3"],
	},
	{
		name: "Development Tools",
		icon: <Terminal className="w-5 h-5" />,
		skills: ["VS Code", "Swagger", "Strapi", "Trello", "Wrike"],
	},
];

export const SkillsSection = () => {
	return (
		<section id="skills" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					Skills &{" "}
					<span className="text-primary">Technologies</span>
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
										className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
									>
										{skill}
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
