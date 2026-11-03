// ── Skills / Tech Stack Data ──

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Java", icon: "/icons/skills/java.svg" },
      { name: "Python", icon: "/icons/skills/python.svg" },
      { name: "JavaScript", icon: "/icons/skills/javascript.svg" },
      { name: "TypeScript", icon: "/icons/skills/typescript.svg" },
      { name: "C", icon: "/icons/skills/c.svg" },
      { name: "C++", icon: "/icons/skills/cpp.svg" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", icon: "/icons/skills/react.svg" },
      { name: "HTML", icon: "/icons/skills/html.svg" },
      { name: "Tailwind CSS", icon: "/icons/skills/tailwind.svg" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Spring Boot", icon: "/icons/skills/springboot.svg" },
      { name: "Node.js", icon: "/icons/skills/nodejs.svg" },
      { name: "Express.js", icon: "/icons/skills/express.svg" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "Oracle", icon: "/icons/oracle.svg" },
      { name: "MongoDB", icon: "/icons/skills/mongodb.svg" },
    ],
  },
  {
    id: "tools",
    label: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "/icons/skills/git.svg" },
      { name: "GitHub", icon: "/icons/skills/github.svg" },
      { name: "VS Code", icon: "/icons/skills/vscode.svg" },
      { name: "IntelliJ IDEA", icon: "/icons/skills/idea.svg" },
      { name: "Postman", icon: "/icons/skills/postman.svg" },
      { name: "Bruno", icon: "/icons/skills/bruno.svg" },
    ],
  },
];
